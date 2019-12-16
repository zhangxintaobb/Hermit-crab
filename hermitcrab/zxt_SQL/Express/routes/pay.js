var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.get('/pay', function (req, res, next) {
  let content = req.query;
  console.log(req.query)
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update userorder set pay = ? where userid = ? && roomid = ?",[1,content.userid,content.srid],function (err, result) {
    if (err) {
      console.log(err);
    }
    else{
      console.log(result)
    }
  });
})


module.exports = router;
