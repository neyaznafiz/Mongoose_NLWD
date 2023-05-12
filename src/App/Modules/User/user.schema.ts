import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergenctContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permentAddress: {
    type: String,
    required: true,
  },
});

// for instance
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// for static
userSchema.static('getAdminUsers', async function getAdminUsers():Promise<IUser[]> {
  const admins = await this.find({ role: 'admin' });
  return admins
});

export const User = model<IUser, UserModel>("User", userSchema);
