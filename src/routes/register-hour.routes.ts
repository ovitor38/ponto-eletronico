import { Router } from "express";
import {
  checkIn,
  checkOut,
  lunchIn,
  lunchOut,
} from "../controllers/register-hour.controller";

const AuthMidleware = require("../App/Midlewares/AuthMidleware");
const router = Router();

router.post("/check-in/:id", AuthMidleware, checkIn);
router.put("/lunch-in/:idRegister", AuthMidleware, lunchIn);
router.put("/lunch-out/:idRegister", AuthMidleware, lunchOut);
router.put("/check-out/:idRegister", AuthMidleware, checkOut);

export default router;
