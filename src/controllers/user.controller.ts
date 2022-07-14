import { Response, Request } from "express";
import { InternalServerError, BadRequest } from "../helpers";
import { userCreation } from "../services/user.service";
import { emailValidator } from "../utils/email-validator";

const createUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const valid = emailValidator(email);
  try {
    if (!email) {
      throw new BadRequest("Please insert an e-mail");
    }
    if (valid) {
      throw new BadRequest("Please insert a valid e-mail");
    }
    if (password === null || password == "") {
      throw new BadRequest("You must insert a password");
    }

    const user = await userCreation(email, password);
    return res.status(201).json(user);
  } catch (e) {
    res.json({ e });
  }
};

export { createUsers };
