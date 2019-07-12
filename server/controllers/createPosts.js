/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import moment from 'moment';
import posts from '../models/posts';
import users from '../models/users';
import validateAd from '../validators/posts';

const Post = (req, res) => {
  const { error } = validateAd.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }

  const id = parseInt(posts.length + 1, 10);
  const {
    email, status, type, state, city, address, price,
  } = req.body;
  const newPost = {
    id, email, status, type, state, city, address, price,
  };


  posts.push(newPost);
  return res.status(201).json({ status: 'success', data: newPost });
};

export default Post;
