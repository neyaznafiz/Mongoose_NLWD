import { User } from "./user.schema";

export const createUserToDB = async () => {
  const user = await new User({
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
  return user;
};
