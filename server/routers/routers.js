/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */

import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import getUsers from '../controllers/getUsers';
import sold from '../controllers/sold';
import getpost from '../controllers/specific';
import updatePost from '../controllers/updates';
import createPosts from '../controllers/createPosts';
import deletePosted from '../controllers/delete';
import allPosted from '../controllers/posted';
import type from '../controllers/type';
// import admin from '../middleware/admin';
// import auth from '../middleware/auth';

const router = express.Router();

//this is the sign up
router.post('/auth/signup', signup); 

//This is the sign in
router.post('/auth/signin', signin);  


//This is to get all the users
 router.get('/getUsers', getUsers);


// This is to mark some properties as sold. 
router.patch('/property/:id/sold', sold);

//This is to get a specific property
router.get('/property/:id', getpost);

//have to patch elements you want.
router.patch('/property/:id', updatePost);

//This is to post a property.
router.post('/property/', createPosts);

//This is to delete a property. 
router.delete('/property/:id', deletePosted);

//This is to get all the posted properties.
router.get('/property/', allPosted);

//This is to get all the posted properties.
router.get('/property/:id/type', type);


export default router;
