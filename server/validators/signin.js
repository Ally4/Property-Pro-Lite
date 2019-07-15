/* eslint-disable linebreak-style */
import Joi from 'joi';

const validateUserSignin = {

  validation(newUser) {
    const newUserSchema = {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    };
    return Joi.validate(newUser, newUserSchema);
  },
};

export default validateUserSignin;
