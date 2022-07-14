import { Router } from "express";
import { createUsers } from "../controllers/user.controller";
import { resolver } from "../App/adapters/route-adapter";

const router = Router();

router.post("/create-user", resolver(createUsers));

export default router;
