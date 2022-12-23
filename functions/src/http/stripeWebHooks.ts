import * as functions from "firebase-functions";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET || "";
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET || "";
const httpsError = functions.https.HttpsError;
const stripe = new Stripe(stripeSecret, { apiVersion: "2022-11-15" });

export const stripeWebHooks = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    throw new httpsError("permission-denied", "Method Not Allowed").toJSON();
  }

  const sig = req.headers["stripe-signature"];
  if (!sig) {
    throw new httpsError(
      "permission-denied",
      "Stripe Signature is Required"
    ).toJSON();
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (e: any) {
    throw new httpsError(
      "cancelled",
      `Webhooks Construct Event Error: ${e.message}`
    ).toJSON();
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent: any = event.data.object;
      // const contractId: string = paymentIntent.metadata.contract_id;
      // if (!contractId) {
      //   throw new httpsError(
      //     "invalid-argument",
      //     "Contract ID is Required in metadata"
      //   )
      // }
      functions.logger.debug(paymentIntent);
      break;
    default:
      throw new httpsError(
        "permission-denied",
        `Event Type (${event.type}) Not Supported`
      ).toJSON();
  }

  res.send(event.data.object);
});
