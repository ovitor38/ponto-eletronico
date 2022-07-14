import { Router } from "express";
import { userLogin } from "../services/login.service";

const router = Router();

router.get("/login", userLogin);

export default router;
