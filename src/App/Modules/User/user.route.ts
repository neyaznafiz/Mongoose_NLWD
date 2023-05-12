import express from "express";
import {
  createUserController,
  getUsersByIdController,
  getUsersController,
} from "./user.controller";

const router = express.Router();

router.get("/:id", getUsersByIdController);
router.get("/", getUsersController);
router.post("/create-user", createUserController);

export default router;
