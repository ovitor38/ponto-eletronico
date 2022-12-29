import { Response, Request } from "express";
import { BadRequestError, InternalServerError } from "../helpers";
import { findRegister } from "../models/register-hour";
import {
  registerCheckIn,
  lunchInRegister,
  lunchOutRegister,
  checkOutRegister,
} from "../services/register-hour.service";

export const checkIn = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const register = await registerCheckIn(id);
    return res.json(register);
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new BadRequestError(error.message);
    } else {
      throw new InternalServerError(error.message);
    }
  }
};

export const registerUpdate = async (req: Request, res: Response) => {
  try {
    const { updateType, idRegister } = req.body;
    const validRegister = await findRegister(idRegister);

    if (!updateType)
      throw new BadRequestError("Please provide the update type");

    if (!validRegister) {
      return "Register does not found";
    }

    if (updateType === "lunchIn") {
      const lunchIn = await lunchInRegister(idRegister);
      return res.json(lunchIn);
    }
    if (updateType === "lunchOut") {
      const lunchOut = await lunchOutRegister(idRegister);
      return res.json(lunchOut);
    }
    if (updateType === "checkOut") {
      const checkOut = await checkOutRegister(idRegister);
      return res.json(checkOut);
    }
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new BadRequestError(error.message);
    } else {
      throw new InternalServerError(error.message);
    }
  }
};
