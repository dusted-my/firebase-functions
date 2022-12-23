import { Status } from ".";

export type User = {
  fullName: string;
  email: string;
  isCleaner: boolean;
  photoURL: string;
  createdAt: FirebaseFirestore.Timestamp;
  updatedAt: FirebaseFirestore.Timestamp;
  status: Status;
};
