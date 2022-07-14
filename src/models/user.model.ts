import { Users } from "../entities/Users";

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

const idExists = async (id: string) => {
  const registeredUser = await Users.findOne({
    where: {
      id,
    },    
  });
  if (registeredUser) {
    return "id not found";
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
  return users
}

const updateUser = async (id:string, email: string, password:string) => {
  
  const userInformation = await Users.update({ id: id },{email: email, password: password});
  return "Update Sucefully";
}
export { emailExists, idExists, createUser, getUsers, updateUser };
 