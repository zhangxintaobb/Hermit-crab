var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
/* GET home page. */

router.get('/login', function (req, res, next) { //添加的代码
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from user", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(
        {
          "code": 0,
          "msg": "",
          "count": 1000,
          "data": result
        }
      )}
      })
})


module.exports = router;
