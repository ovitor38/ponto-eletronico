import { Router } from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/create-user", createUser);

router.get("/users", getUsers);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
