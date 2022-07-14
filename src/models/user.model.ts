import { Users } from "../entities/Users";

const userExists = async (email: string) => {
  const registeredUser = await Users.findOne({
    where: {
      email,
    },
  });
  if (registeredUser) {
    return "user already registered";
  }
};

const createUser = async (email: string, password: string) => {
  const user = new Users();
  user.email = email;
  user.password = password;
  await user.save();
  return `user created: ${user.email}`;
};

export { userExists, createUser };
 