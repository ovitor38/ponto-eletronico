import { BadRequestError } from "../helpers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUser } from "../models/login.model";
const config = require("../../src/config/auth");

export const userLogin = async (email: string, password: string) => {
  const user = await findUser(email);

  if (!user) {
    throw new BadRequestError("User not found");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new BadRequestError("email and / or password do not match");
  }

  return {
    token: jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.expireIn,
    }),
  };
};
