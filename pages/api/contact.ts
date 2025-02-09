import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import ip from "request-ip";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 1, // Number of points allowed per minute
  duration: 40, // Duration of each point (in seconds)
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  const schema = z.object({
    email: z.string().email().min(6).max(255),
  });
  const validatedData = schema.safeParse(req.body);
  if (!validatedData.success) {
    return res.status(400).json({ message: "Invalid request payload" });
  }

  const userIp = ip.getClientIp(req);
  const userAgent = req.headers["user-agent"];

  try {
    await rateLimiter.consume(userIp as string);
  } catch (_error) {
    res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
    return;
  }

  // Here Start With the logic
  try {
    const googleKey = process.env.GOOGLE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    ) as string;
    const googleEmail = process.env.GOOGLE_CLIENT_EMAIL as string;
    const googleSheetID = process.env.GOOGLE_SHEET_ID as string;
    const auth = new JWT({
      email: googleEmail,
      key: googleKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(googleSheetID, auth);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadHeaderRow();
    if (!sheet.headerValues || sheet.headerValues.length == 0) {
      console.log("Setting header row");
      await sheet.setHeaderRow(["userIp", "userAgent", "email", "timestamp"]);
      await sheet.loadHeaderRow();
    }
    const addedData: Record<string, any> = {
      userIp,
      userAgent,
      email,
      timestamp: new Date().toISOString(),
    };
    await sheet.addRow(addedData);
    return res
      .status(200)
      .json({
        message: "Thank You For Appying. We Will Let you know when we start.",
      });
  } catch (error:unknown) {
    return res.status(401).json(error);
  }
}
