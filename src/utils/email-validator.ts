import validator from "validator";

const emailValidator = (email: string) => {
  const valid = validator.isEmail(email);
  if (!valid) return "invalid email";
};

export { emailValidator };
