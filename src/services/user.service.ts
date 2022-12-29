import {
  createUser,
  getUsers,
  updateEmailUser,
  emailExists,
  deleteUser,
} from "../models/user.model";
import bcrypt from "bcrypt";
import { InternalServerError, BadRequestError } from "../helpers";
import { emailValidator } from "../utils/email-validator";

export const userCreation = async (email: string, password: string) => {
  const valid = emailValidator(email);
  const encryptedPassword = await bcrypt.hash(password, 10);
  const userExist = await emailExists(email);

  if (valid) throw new BadRequestError("Please insert a valid e-mail");

  if (userExist) throw new BadRequestError("user already registered");

  const user = await createUser(email, encryptedPassword);
  return user;
};

export const allUsers = async () => {
  const users = await getUsers();
  return users;
};

export const userUpdate = async (id: string, email: string) => {
  const update = await updateEmailUser(id, email);
  return update;
};

export const deleteUserAccount = async (email: string, password: string) => {
  const userDel = await deleteUser(email, password);
  return userDel;
};
