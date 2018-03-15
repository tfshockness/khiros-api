var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    message: 'EndPoints for API',
    posts: {
      root: '/posts',
      all: 'GET /posts',
      id: 'GET /posts/{id}',
      add: 'POST /posts'
    },
    users: {
      root: '/users'
    },
    carousels: {
      root: '/carousels',
      all: 'GET /carousels',
      id: 'GET /carousels/{id}',
      add: 'POST /carousels',
      update: 'PUT /carousels/{id}',
      delete: 'DELETE /carousels/{id}'

    },
    occupations: {
      root: '/occupations',
      all: 'GET /occupations',
      id: 'GET /occupations/{id}',
      add: 'POST /occupations',
      update: 'PUT /occupations/{id}',
      delete: 'DELETE /occupations/{id}'
    },
    professionals: {
      root: '/occupations/{occupationId}/professionals',
      all: 'GET /occupations/{occupationId}/professionals',
      id: 'GET /occupations/{occupationId}/professionals/{professionalId}',
      add: 'POST /occupations/{occupationId}/professionals',
      update: 'PUT /occupations/{occupationId}/professionals',
      delete: 'DELETE /occupations/{occupationId}/professionals'
    }
  });
});

module.exports = router;
