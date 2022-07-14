import { Response, Request } from "express";
import { BadRequest, InternalServerError } from "../helpers";
import { allUsers, userCreation, userUpdate } from "../services/user.service";
import { emailValidator } from "../utils/email-validator";

const createUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const valid = emailValidator(email);
  
    if (!email) {
      throw new BadRequest("Please insert an e-mail");
    }
    if (valid) {
      throw new BadRequest("Please insert a valid e-mail");
    }
    if (password === null || password === "") {
      throw new BadRequest("You must insert a password");
    }

  try {
    const user = await userCreation(email, password);
    return res.status(201).json(user);
    
  } catch (error) {
    throw new InternalServerError(error.message)    
  }  
};

const getUsers = async (req: Request, res: Response) => {
  const users =  await allUsers()
  return res.status(200).json(users);
}

const updateUser =async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const { email, password } = req.body;
    const information = await userUpdate(id, email, password)
    return information
    
  } catch (error) {
    throw new InternalServerError(error)
  }
  
}

export { createUsers, getUsers, updateUser};
