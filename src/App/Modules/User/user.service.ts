import { IUser } from "./user.interface";
import { User } from "./user.schema";

// create user
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);

  await user.save();
  return user;
};

// get all users
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

// get user by id with queries
export const getUserByID = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, id: 1, role: 1 });
  return user;
};
