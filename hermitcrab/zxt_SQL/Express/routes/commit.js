var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.get('/commit/put', function (req, res, next) {
  let content = req.query;
  console.log(req.query)
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update userorder set commit_content= ?,commit = ?,commit_status = ? where userid = ? && type = ? && roomid = ?",[content.content,true,content.status,content.userid,"自习室",content.roomid],function (err, result) {
    if (err) {
      console.log(err);
    }
    else{
      console.log(result)
    }
  });
})


module.exports = router;
