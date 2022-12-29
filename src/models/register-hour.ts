import { RegisterOfficeHour } from "../entities";

export const findRegister = async (register_id: string) => {
  const registerId = await RegisterOfficeHour.findOneBy({
    register_id,
  });
  return registerId;
};

export const checkIn = async (id: string) => {
  const register = new RegisterOfficeHour();
  register.user_id = id;
  register.checkIn = new Date();
  await register.save();
  return "Register successfully";
};

export const lunchIn = async (register_id: string) => {
  RegisterOfficeHour.update(
    { register_id },
    {
      lunchIn: new Date(),
    }
  );
  return "Lunch-in register sucefully";
};

export const lunchOut = async (register_id: string) => {
  RegisterOfficeHour.update(
    { register_id },
    {
      lunchOut: new Date(),
    }
  );
  return "Lunch-out register sucefully";
};

export const checkOut = async (register_id: string) => {
  RegisterOfficeHour.update(
    { register_id },
    {
      checkOut: new Date(),
    }
  );
  return "Check-out register sucefully";
};
