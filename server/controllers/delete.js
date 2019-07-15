/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable padded-blocks */
import posts from '../models/posts';

const deletePosted = (req, res) => {

  const post = posts.find(p => p.id === parseInt(req.params.id, 10));

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
};

export default deletePosted;
