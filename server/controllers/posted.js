/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import posts from '../models/posts';

const allPosted = (req, res) => {
  if (!posts.length) {
    res.status(404).json({
      status: 404,
      message: 'no property not found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    data: posts,
  });
};
export default allPosted;