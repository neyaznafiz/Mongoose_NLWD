import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
// cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // inserting a test data into mongodb

  // interface
  interface IUser {
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

  // schema
  const userSchema = new Schema<IUser>({
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

  // model
  const User = model<IUser>("User", userSchema);

  // instance create
  const createUserToDB = async () => {
    const user = new User({
      id: "002",
      role: "Student",
      name: {
        firstName: "Jhon",
        lastName: "Wick 2",
      },
      email: "jhon2@gmail.com",
      password: "asdf",
      dateOfBirth: "2-4-2000",
      gender: "male",
      contactNo: "01844675433",
      emergenctContactNo: "01988765545",
      presentAddress: "Dhaka, Bangladesh",
      permentAddress: "Rajshahi, Bangladesh",
    });

      await user.save();
      console.log(user)
  };

  createUserToDB();
    res.send("Server is running");
});

export default app;
