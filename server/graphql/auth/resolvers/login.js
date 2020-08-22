const bcrypt = require("bcrypt");

const User = require("../../../models/user");
const config = require("../../../config/keys");
const tokenUtil = require("../../../utils/token");
const validateLogin = require("../../../validation/LogInValidation");

const login = async (_, { email, password }) => {
  const { errors, isValid } = validateLogin(email, password);

  if (!isValid) {
    return Error(JSON.stringify(errors));
  }

  const user = await User.findOne({
    email,
  });

  if (!user) {
    errors.emailLogin = "User not found";
    return Error(JSON.stringify(errors));
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (!isPasswordValid) {
    errors.passwordLogin = "Incorrect password";
    return Error(JSON.stringify(errors));
  }

  const token = tokenUtil.create(user._id, user.name, user.email);

  return {
    user: {
      ...user._doc,
      id: user._id,
    },
    token,
    tokenExpiration: config.JWT_LIFE_TIME,
  };
};

module.exports = login;
