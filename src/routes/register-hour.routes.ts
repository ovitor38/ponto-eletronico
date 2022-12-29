import { Router } from "express";
import { resolver } from "../App/adapters/route-adapter";
import AuthMidleware from "../App/midlewares/AuthMidleware";
import {
  checkIn,
  registerUpdate,
} from "../controllers/register-hour.controller";

const router = Router();

router.post("/check-in", AuthMidleware, resolver(checkIn));
router.put("/register-update", AuthMidleware, resolver(registerUpdate));

export default router;
