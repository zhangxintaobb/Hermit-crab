var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Login' });
});

router.post('/system', function (req, res, next) {
  var i = 0;
  while (i < data.users.length) {
    if (data.users[i].username === req.body.username && data.users[i].password === req.body.pwd) {
      console.log("success");
      res.render('system', {
        title: 'System'
      });
      break;
    }
    i++;
  }
  if (i == data.users.length) {
    res.end("login error");
  }
})

router.get('/getdata/user', function (req, res, next) {
  res.json(
    {
      "code": 0,
      "msg": "",
      "count": 1000,
      "data": [
        {
          "id": 1,
          "username": "user-00",
          "sex": "女",
          "phone": "13365875369",
          "address": "河北省石家庄市裕华区河北师范大学"
        },
        {
          "id": 2,
          "username": "user-01",
          "sex": "男",
          "phone": "13365875369",
          "address": "河北省石家庄市裕华区河北师范大学"
        }
      ]
    }
  )
});

module.exports = router;
