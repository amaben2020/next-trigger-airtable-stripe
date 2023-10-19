//👉🏻  Within the api/payment.ts file
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {} as any);

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: process.env?.PRODUCT_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: "http://localhost:3000",
    });

    NextResponse.json({ session: session.url }, { status: 200 });
  } catch (error) {
    console.log("Error", error);
    NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
