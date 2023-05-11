import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

// create user
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get users
export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();

  res.status(200).json({
    status: "success",
    data: users,
  });
};
