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
import posts from '../models/posts';

const sold = (req, res) => {
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
};

export default sold;
