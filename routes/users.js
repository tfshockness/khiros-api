var express = require('express');
var router = express.Router();
const userService = require('../services/user.services');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await userService.all();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const user = await userService.getById(req.params.id);
  user ?  res.status(200).send(user) :
          res.status(400).send({error: `Post with id: ${req.params.id} was not found`});
});

router.post('/', (req, res) => {
  try {
    const user = userService.create(req.body);
    res.status(301).redirect(`/users/${user._id}`);
  } catch (error) {
    return res.status(403).send({...error});
  }
});

module.exports = router;
