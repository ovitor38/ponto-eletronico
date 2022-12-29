import { Router } from "express";
import {
  getUsers,
  userInformation,
  creationRoute,
} from "../controllers/user.controller";
import { resolver } from "../App/adapters/route-adapter";
import AuthMidleware from "../App/midlewares/AuthMidleware";

const router = Router();

router.post("/user", resolver(creationRoute));
router.put("/user-information", AuthMidleware, resolver(userInformation));
router.get("/get-users", resolver(getUsers));

export default router;
