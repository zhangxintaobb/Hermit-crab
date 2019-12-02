var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/system', function (req, res, next) {
  var i = 0;
  while(i < data.users.length) {
    if(data.users[i].username === req.body.username && data.users[i].password === req.body.pwd) {
      console.log("success");
      res.render('system', {
        title: 'System'
      });
      break;
    }
    i++;
  }
  if(i==data.users.length){
    res.end("login error");
  }
})

module.exports = router;
