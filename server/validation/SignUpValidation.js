const validator = require("validator");
const isEmpty = require("./IsEmpty");

module.exports = validateSignUp = (name, email, password) => {
  let errors = {};

  name = !isEmpty(name) ? name : "";
  email = !isEmpty(email) ? email : "";
  password = !isEmpty(password) ? password : "";

  if (!validator.isLength(name, { min: 3, max: 30 })) {
    errors.name = "Entered name must be in range of 3 to 30 characters";
  }

  if (validator.isEmpty(name)) {
    errors.name = "Name field is required";
  }

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Invalid email";
  }

  if (validator.isEmpty(password)) {
    errors.password = "password field is required";
  }

  if (!validator.isLength(password, { min: 8, max: 30 })) {
    errors.password = "Entered password must be minimum 8 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
