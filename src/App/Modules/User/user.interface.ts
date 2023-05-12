import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string;
    role: string;
    name: {
      firstName: string;
      lastName: string;
    };
    email?: string;
    password: string;
    dateOfBirth: string;
    gender: "male" | "female";
    contactNo: string;
    emergenctContactNo: string;
    presentAddress: string;
    permentAddress: string;
}
  
// interface for  instance methods
export interface IUserMethods {
  fullName(): string;
}

// interface for static
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}