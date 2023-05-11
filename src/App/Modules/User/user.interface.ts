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