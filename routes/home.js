var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    message: 'EndPoints for API',
    posts: {
      root: 'GET /posts',
      all: 'GET /posts',
      id: 'GET /posts/{id}',
      add: 'POST /posts'
    },
    users: {
      root: 'GET /users'
    },
    carousels: {
      root: 'GET /carousels',
      all: 'GET /carousels',
      id: 'GET /carousels/{id}',
      add: 'POST /carousels',
      update: 'PUT /carousels/{id}',
      delete: 'DELETE /carousels/{id}'

    }
  });
});

module.exports = router;
