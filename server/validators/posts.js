/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
import Joi from 'joi';

const validatePost = {

  validation(newPost) {
    const newPostSchema = { 
      status: Joi.string().optional(),
      type: Joi.string().required(),
      state: Joi.string().optional(),
      city: Joi.string().optional(),
      address: Joi.string().optional(),
      price: Joi.number().optional(),
      created_on: Joi.date().optional(),
      image_url: Joi.string().optional(),
    };
    return Joi.validate(newPost, newPostSchema);
  },

};

export default validatePost;
