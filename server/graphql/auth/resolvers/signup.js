const bcrypt = require("bcrypt");

const User = require("../../../models/user");
const config = require("../../../config/keys");
const tokenUtil = require("../../../utils/token");
const validateSignup = require("../../../validation/SignUpValidation");

const SALT_ROUNDS = 12;

const signup = async (_, { name, email, password }) => {
  try {
    const { errors, isValid } = validateSignup(name, email, password);

    if (!isValid) {
      return Error(JSON.stringify(errors));
    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      errors.email = "User already exists";
      return Error(JSON.stringify(errors));
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
      name,
      email,
      hashedPassword,
    });

    const token = tokenUtil.create(user._id, user.name, user.email);

    return {
      user: {
        ...user._doc,
        id: user._id,
      },
      token,
      tokenExpiration: config.JWT_LIFE_TIME,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = signup;
