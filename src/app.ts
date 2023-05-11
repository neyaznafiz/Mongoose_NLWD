import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./App/Modules/User/user.route";

const app: Application = express();
// cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running");
});

app.use("/api/v1/user", userRoute);

export default app;
