/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable comma-spacing */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
// import moment from 'moment';
// import validateUpdateStatus from '../validators/posts';
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
/* eslint-disable no-multi-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable keyword-spacing */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
import posts from '../models/posts';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const sold = (req, res) => {
  try{
    const token = jwt.verify(req.headers.token, process.env.TOKEN);
     
    const isOwner = posts.find(p => p.owner===token.email);
  
  if(!isOwner)  return res.status(401).json({ status: 401, message: 'not the owner' });
  
    const postId = req.params.id;
    const postIndex = posts.findIndex(o => o.id === parseInt(postId, 10));
    if (postIndex) {
      const originalPost = posts[postIndex];
  originalPost.status = "sold";
      res.status(200).json({
        status: 200,
        data: originalPost,
      });
      return;
    }
    res.status(404).json({
      status: 404,
      message: 'property not found',
      data: [],
    });
  }catch(e){
    res.status(400).send({ status: 400, error: "invalid token" });
  }
  
};

export default sold;
