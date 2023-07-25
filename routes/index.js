var express = require('express');
var router = express.Router();
var Foobar = require('../helper-functions/FooBar')

/* GET foo bar */
router.get('/foobar', function(req, res, next) {
  res.send(Foobar())
});

module.exports = router;
