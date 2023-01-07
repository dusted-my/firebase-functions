import * as functions from "firebase-functions";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET || "";
const httpsError = functions.https.HttpsError;
const stripe = new Stripe(stripeSecret, { apiVersion: "2022-11-15" });

export const createPaymentIntent = functions.https.onRequest(
  async (req, res) => {
    if (req.method !== "POST") {
      throw new httpsError("permission-denied", "Method Not Allowed").toJSON();
    }

    const { amount, contractId } = req.body;
    if (!amount) {
      throw new httpsError("invalid-argument", "Amount is Required").toJSON();
    }
    if (!contractId) {
      throw new httpsError(
        "invalid-argument",
        "Contract ID is Required"
      ).toJSON();
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "myr",
        payment_method_types: ["card", "fpx"],
        metadata: {
          contractId,
        },
      });

      res.status(201).json({ clientSecret: paymentIntent.client_secret });
    } catch (e: any) {
      throw new httpsError(
        "cancelled",
        `Webhooks Construct Event Error: ${e.message}`
      ).toJSON();
    }
  }
);
