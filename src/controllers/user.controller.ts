import { Response, Request } from "express";
import { Users } from "../entities/Users";

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req);
  // const emailReg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  //const user = await Users.findOneBy({ email: email });
  // if (!emailReg.test(email)) {
  //   res.json({ message: "Please insert a valid e-mail" });
  // }
  // if (!email) {
  //   res.json({ message: "You must insert an e-mail" });
  // }
  // if (password === null || password == "" || password == "") {
  //   res.json({ message: "You must insert a password" });
  // }

  // if (email === user) {
  //   res.json({ message: "This email already been registered" });
  // }

  try {
    const user = new Users();
    user.email = email;
    user.password = password;

    await user.save();

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await Users.findOneBy({ id: id });
    if (!user) {
      return res.status(404).json({ message: "User does not found" });
    }

    await Users.update({ id: id }, req.body);

    return res.status(204).json("Update Sucefully");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Users.delete({ id: id });

    if (result.affected === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.sendStatus(204).json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
