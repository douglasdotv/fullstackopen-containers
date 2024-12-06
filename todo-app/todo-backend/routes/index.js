const express = require('express');
const router = express.Router();
const configs = require('../util/config');

let visits = 0;

router.get('/', async (_req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
