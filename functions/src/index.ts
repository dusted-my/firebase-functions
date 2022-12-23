import * as admin from "firebase-admin";
import * as dotenv from "dotenv";

dotenv.config();
admin.initializeApp();

export * from "./triggers/onCreateUser";
export * from "./http/stripeWebHooks";
