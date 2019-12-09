var express = require('express');
var router = express.Router();
var app = express();
const bodyParser = require('body-parser');
/* GET home page. */

router.get('/json', function (req, res, next) { //添加的代码
  console.log(req.query);
  let myjson = {
  name : '123456',
  price : '3元',
  date : '2018年1月1日'
  }
  res.send(myjson);

})




module.exports = router;
