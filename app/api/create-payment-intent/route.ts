// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2024-06-20",
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { amount, currency = "aed", metadata } = body;

//     if (!amount || amount <= 0) {
//       return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
//     }

//     // Stripe expects the smallest currency unit (e.g. fils for AED, cents for USD)
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: Math.round(amount * 100),
//       currency,
//       automatic_payment_methods: { enabled: true },
//       metadata: metadata || {},
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err: any) {
//     console.error("Stripe PaymentIntent error:", err);
//     return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // TypeScript ko force karein ke wo is version ko accept kar le
  apiVersion: "2024-06-20" as any, 
});

export async function POST(req: NextRequest) {
  // Baaki ka code waisa hi rehne dein...
  try {
    const body = await req.json();
    const { amount, currency = "aed", metadata } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: metadata || {},
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("Stripe PaymentIntent error:", err);
    return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
  }
}