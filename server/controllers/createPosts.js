/* eslint-disable quotes */
/* eslint-disable import/order */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable no-trailing-spaces */
import posts from '../models/posts';
import jwt from 'jsonwebtoken';
import validateAd from '../validators/posts';
const Post = (req, res) => {
  const { error } = validateAd.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }

  const id = parseInt(posts.length + 1, 10);
  const {

    email, type, state, city, address, price,
  } = req.body;

  if (req.body.price <= 1000) {

    return res.status(400).json({ status: 400, message: "Not allowed to post, the price is low" });
  }
const newPost = {
    id, email, status: ("Available"), type, state, city, address, price,



  const payload = {
    email: req.body.email,
    type: req.body.type,
    state: req.body.state,
    address: req.body.address,
  };
  const token = jwt.sign(payload, process.env.TOKEN, { expiresIn: '24hrs' });

  posts.push(newPost);
  return res.status(201).json({ status: 'success', token, data: newPost });

};

export default Post;
