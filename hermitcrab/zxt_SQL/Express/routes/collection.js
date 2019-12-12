var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json")
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.get('/collection', function (req, res, next) { //添加的代码
    console.log(req.query)
    let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from srinfo where srid in (select roomid from usercollect where userid = ? )",[req.query.userid] , function (err, result) {
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
  let srid = req.query.srid;
  console.log(srid)
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from usercollect where roomid=?", [srid], function (err, result) {
    if (err) {
      console.log(err);
    }
    else{
      console.log(result)
    }
  });
})


module.exports = router;
