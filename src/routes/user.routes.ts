import { Router } from "express";
import { createUsers, getUsers, updateUser } from "../controllers/user.controller";
import { resolver } from "../App/adapters/route-adapter";

const router = Router();


router.post("/create-user", resolver(createUsers));
router.get ("/get-users", resolver(getUsers))
router.put ("/update-user/:id", resolver(updateUser))

export default router;
