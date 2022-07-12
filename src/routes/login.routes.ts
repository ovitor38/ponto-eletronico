import { Router } from "express";
import { userLogin, welcomePage } from "../controllers/login.controller";

const AuthMidleware = require("../App/Midlewares/AuthMidleware");
const router = Router();

router.get("/login", userLogin);

router.get("/welcome", AuthMidleware, welcomePage);

export default router;
