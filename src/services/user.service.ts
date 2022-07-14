import { createUser, getUsers, updateUser, emailExists, idExists } from "../models/user.model";
import bcrypt from "bcrypt";
import { InternalServerError } from "../helpers";

const userCreation = async (email: string, password: string) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const userExist = await emailExists(email);
    if (userExist) return userExist;
  
    const user = await createUser(email, encryptedPassword);
    return user;
    
  } catch (error) {
    throw new InternalServerError(error.message)
  }
};

const allUsers = async () => {
  try {
    const users = await getUsers()
    return users
  } catch (error) {
    throw new InternalServerError(error.message)
  }
};

export const userUpdate = async (id: string, email: string, password: string) => {
  try {
    const user = await idExists(id);
    console.log(user)
    const update = await updateUser(id, email, password)
    return update  
    
  } catch (error) {
    throw new InternalServerError(error.message)
  }
}
  
  
//   try {
//     const { id } = req.params;
//     const user = await Users.findOneBy({ id: id });
//     if (!user) {
//       return res.status(404).json({ message: "User does not found" });
//     }

//     await Users.update({ id: id }, req.body);

//     return res.status(204).json("Update Sucefully");
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const result = await Users.delete({ id: id });

//     if (result.affected === 0) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     return res.sendStatus(204).json({ message: "User deleted" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
export { userCreation, allUsers};
