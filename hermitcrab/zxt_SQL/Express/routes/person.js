var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
/* GET home page. */

 router.get('/myself/person', function (req, res, next) { //添加的代码
  console.log(req.query);
  let person = {
    username : '张鑫涛',
    phoneNumber: '15960266038',
    email:'1309526743@qq.com',
    sex:'女'
  }
  res.send(person);
})


module.exports = router;
