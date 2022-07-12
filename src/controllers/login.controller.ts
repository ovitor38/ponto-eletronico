import { Response, Request } from "express";
import { Users } from "../entities/Users";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../src/config/auth");

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await Users.findOne({
    where: {
      email,
    },
  });

  try {
    if (!user) {
      return res.status(400).json({ messsage: "User not found" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res
        .status(400)
        .json({ message: "email and/or password do not match" });
    }

    return res.status(200).json({
      token: jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.expireIn,
      }),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const welcomePage = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);

  return res.status(200).json({ message: "You are on private route" });
};
