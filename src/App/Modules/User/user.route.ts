import express from "express";
import { createUserController, getUsersController } from "./user.controller";

const router = express.Router();

router.get("/", getUsersController);
router.post("/create-user", createUserController);

export default router;
