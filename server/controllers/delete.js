/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable space-infix-ops */
/* eslint-disable keyword-spacing */
/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
import posts from '../models/posts';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const deletePosted = (req, res) => {
  try {
    const token = jwt.verify(req.headers.token, process.env.TOKEN);
     
const isOwner = posts.find(p => p.owner===token.email);


  const post = posts.find(p => p.id === parseInt(req.params.id, 10));
if(!isOwner)  return res.status(401).json({ status: 401, message: 'not the owner' });
  if (!post) {
    res.status(404).json({
      status: 404,
      message: 'property not found',
     
    });
    return;
  }

  const index = posts.indexOf(post);
  posts.splice(index, 1);
  res.status(200).send({
    status: 200,
    data: 'property successfully deleted',
  });
  } catch(e){
    res.status(400).send({ status:400, error:"invalid token" });
  }
 
};

export default deletePosted;
