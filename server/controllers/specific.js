/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import posts from '../models/posts';

const getpost = (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id, 10));
  if (!post) {
    res.status(404).json({
      status: 404,
      message: 'post not found',
      data: [],
    });
  } else {
    res.status(200).json({
      status: 200,
      data: post,
    });
  }
};

export default getpost;
