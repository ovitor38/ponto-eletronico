import { Router } from "express";
import { resolver } from "../App/adapters/route-adapter";
import { login } from "../controllers/login.controller";

const router = Router();

router.get("/login", resolver(login));

export default router;
