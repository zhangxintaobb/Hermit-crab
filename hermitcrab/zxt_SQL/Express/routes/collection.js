var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const data=[]
router.get('/collection', function (req, res, next) { //添加的代码
    console.log(req.query)
    let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from studyroom where sr_id in (select sr_id from user_sr where userid = ? && collection = ?)",[req.query.userid,true] , function (err, result) {
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
          )
      }
      })
})

router.get('/collection/delete', function (req, res, next) {
  let sr_id = req.query.sr_id;
  console.log(sr_id)
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from user_sr where sr_id=?", [sr_id], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})


module.exports = router;
