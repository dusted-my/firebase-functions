import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { User } from "./types";

export const onCreateUser = functions.auth.user().onCreate(async (user) => {
  const { displayName, email, photoURL } = user;

  const temporaryName = email ? email.split("@")[0] : "";

  const newUser: User = {
    fullName: displayName || temporaryName,
    email: email || "",
    isCleaner: false,
    photoURL: photoURL || "",
    status: "active",
    createdAt: admin.firestore.Timestamp.now(),
    updatedAt: admin.firestore.Timestamp.now(),
  };
  await admin.firestore().collection("users").doc(user.uid).set(newUser);
});
