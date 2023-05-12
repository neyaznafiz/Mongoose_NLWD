import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByID, getUsersFromDB } from "./user.service";

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

// get all users
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

// get user by id
export const getUsersByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByID(id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};
