/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable keyword-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import validateSignup from '../validators/signup';
import users from '../models/users';

dotenv.config();

const signup = (req, res) =>{


  const { error } = validateSignup.validation(req.body);
  if (error) {
    return{
      "status": 400,
      "message": error.details[0].message
    };
  }


  const id = parseInt(users.length + 1, 10);
  const findUser = users.find(u => u.email === req.body.email);
  if (findUser) {
    res.status(403).send({
      "status": 403,
      "message": "Already in the system."
    });
  }

  const { email, first_name, last_name, password, phone_number, address, is_admin } = req.body;
  const hashpassword = bcrypt.hashSync(password, 10);
  users.push({
    id, email, first_name, last_name, hashpassword, phone_number, address, is_admin,
  });

  const payload = {
    id,
    email,
    first_name,
    last_name,
    phone_number,
    address,
    is_admin,
  };

  const token = jwt.sign(payload, process.env.TOKEN, { expiresIn: '24hrs' });

  res.status(201).json({
    status: 'success',
    data: {
      token,
      id,
      first_name,
      last_name,
      email,
    },
  });
}

export default signup;
