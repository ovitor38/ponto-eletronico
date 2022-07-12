import { Response, Request } from "express";
import { RegisterOfficeHour } from "../entities";

export const checkIn = async (req: Request, res: Response) => {
  const register = new RegisterOfficeHour();
  const { id } = req.params;

  try {
    console.log(req.params.userId);
    register.checkIn = new Date();
    register.user_id = id;

    await register.save();
    return res.json({ message: "Register successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const lunchIn = async (req: Request, res: Response) => {
  try {
    const { idRegister } = req.params;
    const registerId = await RegisterOfficeHour.findOneBy({
      register_id: idRegister,
    });

    if (!registerId) {
      return res.status(404).json({ message: "Register does not found" });
    }

    await RegisterOfficeHour.update(
      { register_id: idRegister },
      {
        lunchIn: new Date(),
      }
    );
    return res.status(200).json({ message: "Lunch-in register sucefully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const lunchOut = async (req: Request, res: Response) => {
  try {
    const { idRegister } = req.params;
    const registerId = await RegisterOfficeHour.findOneBy({
      register_id: idRegister,
    });
    if (!registerId) {
      return res.status(404).json({ message: "Register does not found" });
    }

    await RegisterOfficeHour.update(
      { register_id: idRegister },
      {
        lunchOut: new Date(),
      }
    );

    return res.status(200).json({ message: "Lunch-out register sucefully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const checkOut = async (req: Request, res: Response) => {
  try {
    const { idRegister } = req.params;
    const registerId = await RegisterOfficeHour.findOneBy({
      register_id: idRegister,
    });
    if (!registerId) {
      return res.status(404).json({ message: "Register does not found" });
    }

    await RegisterOfficeHour.update(
      { register_id: idRegister },
      {
        checkOut: new Date(),
      }
    );

    return res.status(200).json({ message: "Check out register Sucefully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
