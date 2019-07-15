/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
import posts from '../models/posts';

const type = (req, res) => {
  const { query } = req;
  const keys = Object.keys(query);
  if (keys.length <= 0) {
    res.status(200).json({
      status: 200,
      data: posts,
    });
  }
  const { type } = query;
  const post = posts.filter(poster => poster.type === type);
  if (post.length <= 0) {
    res.status(404).json({
      status: 'error',
      message: 'property Not found',
    });
  }
  res.status(200).json({
    status: 200,
    data: post,
  });
};
export default type;