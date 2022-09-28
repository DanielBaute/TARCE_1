var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('users', { title: 'Problema 1'});
=======
  res.send('<h1>respond with a resource</h1>');
>>>>>>> 7e7d1eb3cd960a5c984bb35e520642d44e3df3db
});

module.exports = router;
