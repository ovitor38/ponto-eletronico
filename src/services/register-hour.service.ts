import { checkIn, checkOut, lunchIn, lunchOut } from "../models/register-hour";

export const registerCheckIn = async (id: string) => {
  const registerIn = await checkIn(id);
  return registerIn;
};

export const lunchInRegister = async (register_id: string) => {
  const lInRegister = await lunchIn(register_id);
  return lInRegister;
};

export const lunchOutRegister = async (register_id: string) => {
  const lOutRegister = await lunchOut(register_id);
  return lOutRegister;
};
export const checkOutRegister = async (register_id: string) => {
  const registerOut = await checkOut(register_id);
  return registerOut;
};
