import { Users } from "../entities/Users";
import bcrypt from "bcrypt";

const emailExists = async (email: string) => {
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

const getUsers = async () => {
  const users = await Users.find({ select: ["email", "id"] });
  return users;
};

const updateEmailUser = async (id: string, email: string) => {
  await Users.update({ id }, { email });
  return "email update successfully";
};

const deleteUser = async (email: string, password: string) => {
  const user = await Users.findOne({
    where: {
      email,
    },
  });

  if (!(await bcrypt.compare(password, user.password))) {
    return "email and/or password do not match";
  }

  await Users.delete({ email });
  return `User ${email} deleted`;
};

export { emailExists, createUser, getUsers, updateEmailUser, deleteUser };
