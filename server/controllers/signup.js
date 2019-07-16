/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import validateSignup from '../validators/signup';
import users from '../models/users';

dotenv.config();

const signup = (req, res) => {


  const { error } = validateSignup.validation(req.body);
  if (error) {
    return {
      status: 400,
      message: error.details[0].message,
    };
  }


  const id = parseInt(users.length + 1, 10);
  const findUser = users.find(u => u.email === req.body.email);
  if (findUser) {

    return res.status(409).send({
      status: 409,
      message: 'Already in the system.',
    });
  }


  const {
    email, firstName, lastName, password, phoneNumber, address, isAdmin,
  } = req.body;
  const hashpassword = bcrypt.hashSync(password, 10);
  users.push({
    id, email, firstName, lastName, hashpassword, phoneNumber, address, isAdmin,

  });

  const payload = {
    id,
    email,

    firstName,
    lastName,
    phoneNumber,

    address,
    isAdmin,

  };

  const token = jwt.sign(payload, process.env.TOKEN, { expiresIn: '24hrs' });
  return res.status(201).json({
    status: 'success',
    data: {
      token,
      id,
      hashpassword,
      firstName,
      lastName,
      email,
    },
  });
};

export default signup;
