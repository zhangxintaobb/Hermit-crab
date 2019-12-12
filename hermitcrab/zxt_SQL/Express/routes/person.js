var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
/* GET home page. */

router.post('/myself/person', function (req, res, next) { //添加的代码
  console.log(req.query);
  const name=req.query.username;
  const id=req.query.userid;
  const password=req.query.password;
  const sex=req.query.sex;
  const email=req.query.email;
  let con = mysql.createConnection(dbconfig);
  con.query("update userinfo set username = ?,email = ?,sex = ?,password = ? where userid = ?", [name,email,sex,password,id], function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
})




module.exports = router;
