/* eslint-disable linebreak-style */
/* eslint-disable newline-per-chained-call */
import Joi from 'joi';

const validateSignup = {
  validation(userInputs) {
    const newUser = {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      password: Joi.string().min(6).max(12).required(),
      phone_number: Joi.string().required(),
      address: Joi.string().required(),
      is_admin: Joi.boolean().required(),
    };
    return Joi.validate(userInputs, newUser);
  },
};

export default validateSignup;
