import { Response, Request } from "express";
import { InternalServerError, BadRequestError } from "../helpers";
import {
  allUsers,
  deleteUserAccount,
  userCreation,
  userUpdate,
} from "../services/user.service";

export const creationRoute = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (email === null || email === "") {
      throw new BadRequestError("You must insert a email");
    }
    if (password === null || password === "") {
      throw new BadRequestError("You must insert a password");
    }

    if (email && password) {
      const creation = await userCreation(email, password);
      return res.json(creation);
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new BadRequestError(error.message);
    } else {
      throw new InternalServerError(error.message);
    }
  }
};

export const userInformation = async (req: Request, res: Response) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const id = req.params.userId;

    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        throw new BadRequestError("Passwords does not match");
      }
      const deleteInformation = await deleteUserAccount(email, password);
      return res.status(201).json(deleteInformation);
    }

    if (id) {
      const information = await userUpdate(id, email);
      return res.status(201).json(information);
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new BadRequestError(error.message);
    } else {
      throw new InternalServerError(error.message);
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await allUsers();
    return res.status(200).json(users);
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};
