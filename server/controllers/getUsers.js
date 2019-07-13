/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import users from '../models/users';

const getUsers = (req, res) => {
  if (!users.length) {
    res.status(404).json({
      status: 404,
      message: 'no user found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: users,
  });
};

export default getUsers;
