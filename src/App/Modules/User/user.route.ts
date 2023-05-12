import express from "express";
import {
  createUserController,
  getUsersByIdController,
    getUsersController,
    getAdminUsersController
} from "./user.controller";

const router = express.Router();

router.get("/admins", getAdminUsersController);
router.get("/:id", getUsersByIdController);
router.get("/", getUsersController);
router.post("/create-user", createUserController);

export default router;
