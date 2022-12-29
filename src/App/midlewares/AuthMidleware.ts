import { InternalServerError } from "../../helpers";

import jwt from "jsonwebtoken";
const config = require("../../config/auth");

export default async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      error: true,
      code: 130,
      message: "No token provided",
    });
  }

  const [_, token] = auth.split(" ");

  try {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(401).json({ error: "Token invalid" });
      req.params.userId = decoded.id;
      return next();
    });
  } catch (error) {
    throw new InternalServerError(error);
  }
};
