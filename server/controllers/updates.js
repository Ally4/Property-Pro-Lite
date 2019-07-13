/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable comma-spacing */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import moment from 'moment';
import validatePostedPrice from '../validators/posts';
import posts from '../models/posts';

const updatePost = (req, res) => {
 
  const postId = req.params.id;
  const post = posts.find(p => p.id == postId);
  if (!post) {
    res.status(404).json({
      status: 'error',
      message: 'property not found',
    });
  }
  const postIndex = posts.indexOf(post);
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);

  // eslint-disable-next-line guard-for-in
  for (let property in post) {
    for (let index = 0; index < keys.length; index++) {
      const param2 = keys[index];
      if (property === param2) {
        post[property] = values[index];
      }
  }
}
res.status(200).json({
  status: 'success',
  data: post,
});
};
export default updatePost;
