/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/order */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
import posts from '../models/posts';
import validateAd from '../validators/posts';
import users from '../models/users';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const Post = (req, res) => {
  try{
    const token = jwt.verify(req.headers.token, process.env.TOKEN);
    const isUserExist = users.find(p=>p.email===token.email);
    const { error } = validateAd.validation(req.body);
    if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message });
    }
  
    if(!isUserExist)  return res.status(404).json({status: 404, message: 'user not found'});
    const id = parseInt(posts.length + 1, 10);
    const {
  
      email, type, state, city, address, price,
    } = req.body;
  
    if (req.body.price <= 1000) {
  
      return res.status(400).json({ status: 400, error: error.details[0].message });
    }
    const newPost = {
      id, email, status: "Available", type, state, city, address, price,
  
    };
  
    posts.push(newPost);
    return res.status(201).json({ status: 'success', data: newPost });
  
  } catch(e){
    res.status(400).send({status:400, error:"invalid token"});
  }
  

  
 
};

export default Post;
