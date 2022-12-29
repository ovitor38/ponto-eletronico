import { Users } from "../entities";

export const findUser = async (email: string) => {
  const user = await Users.findOne({
    where: {
      email,
    },
  });
  return user;
};
