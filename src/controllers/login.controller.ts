import { Response, Request } from "express";
import { BadRequestError, InternalServerError } from "../helpers";
import { userLogin } from "../services/login.service";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const userLog = await userLogin(email, password);
      return res.json(userLog);
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new BadRequestError(error.message);
    } else {
      throw new InternalServerError(error.message);
    }
  }
};
