var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
// var dbconfig = require('../config/dbconfig.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 用户列表
router.post('/list/user', (req, res) => {
  res.conn.query("select * from userinfo", function (err, result) {
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
  });
});

// 房东列表
router.get('/list/fd', (req, res) => {
  res.conn.query("select * from fdinfo", function (err, result) {
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
  });
});

// 自习室列表
router.get('/list/sr',(req, res) => {
  res.conn.query("select * from srinfo", function (err, result) {
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
  });
});

// 获取自习室详细信息
router.get('/list/sr/detail', function (req, res) {
  // console.log(req.query.id);
  let id = req.query.id;
  res.conn.query("select * from srinfo where srid = " + id, function (err, result) {
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
  });
});

// 办公室列表
router.get('/list/office', function (req, res) {
  res.conn.query("select * from officeinfo", function (err, result) {
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
  });
});

// 获取办公室详细信息
router.get('/list/office/detail', function (req, res) {
  let id = req.query.id;
  res.conn.query("select * from officeinfo where officeid = " + id, function (err, result) {
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
  });
});

// 添加用户
router.post('/adduser', function (req, res) {
  let name = req.body.zxs_name;
  let address = req.body.zxs_address;
  let price = req.body.zxs_price;
  let ownerid = req.body.zxs_ownerid;
  let type = req.body.zxs_kind;
  res.conn.query("insert into srinfo(srname, sraddress, price, ownerid, type) values(?, ?, ?, ?, ?)", [name, address, price, ownerid, type], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

//登录
router.post('/login', function (req, res) { //添加的代码
  let phone = req.body.phone;
  let password = req.body.password;
  res.conn.query("select * from userinfo where phone=?",[phone], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if(result[0] == undefined) {
        res.json(
          {
            "code": 0,
            "msg": "ERROR",
            "count": 1000,
            "data": ""
          }
        )
      } else {
        if(result[0].password == password) {
          res.json(
            {
              "code": 0,
              "msg": "OK",
              "count": 1000,
              "data": result
            }
          )
        } else {
          res.json(
            {
              "code": 0,
              "msg": "PWDERR",
              "count": 1000,
              "data": ""
            }
          )
        }
      }  
    }
  })
})

//注册
router.get('/register', function (req, res) { //添加的代码
  let phone = req.query.phone;
  let password = req.query.password;
  res.conn.query("select * from userinfo where phone=?",[phone], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if(result[0] == undefined) {
        res.conn.query("insert into userinfo(username,phone,password) values(?,?,?)", [phone,phone,password], function (err, result) {
          if (err) {
            console.log(err);
          } else {
            res.json(
              {
                "code": 0,
                "msg": "OK",
                "count": 1000,
                "data": ""
              }
            )
          }
        })
      } else {
        res.json(
          {
            "code": 0,
            "msg": "ERROR",
            "count": 1000,
            "data": ""
          }
        )
      }
    }
  })
})

//第三方登录
router.get('/oathlogin', function (req, res) {
  let username = req.query.username;
	let avatar = req.query.avatar;
  let sex = req.query.sex;
  res.conn.query("insert into userinfo(username,avatar,sex,password) values(?,?,?,?)", [username,avatar,sex,'123456'], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result.insertId);
      res.json(
        {
          "code": 0,
          "msg": "OK",
          "count": 1000,
          "data": result.insertId
        }
      )
    }
  })
})

// 添加收藏
router.get('/addcollect', function (req, res) {
  let roomid = req.query.roomid;
  let userid = req.query.userid;
  let createtime = new Date().getTime();
  let type = req.query.type;
  res.conn.query("select * from usercollect where roomid = ? && userid = ? && type = ?", [roomid, userid,type], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result[0] == undefined) {
        res.conn.query("insert into usercollect(createtime, userid, type, roomid) values(?, ?, ?, ?)", [createtime, userid, type, roomid], function (err, result) {
          if (err) {
            console.log(err);
          }
        });
      }
    }
  });
})
// 删除收藏
router.get('/delcollect', function (req, res) {
  let roomid = req.query.roomid;
  let userid = req.query.userid;
  let type = req.query.type;
  res.conn.query("delete from usercollect where roomid=? && userid=? && type=?", [roomid,userid,type], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

// 获取收藏列表
router.get('/list/usercollect/sr', function (req, res) {
  let userid = req.query.userid;
  res.conn.query("select * from srinfo where srid in (select roomid from usercollect where userid=? && type=?)", [userid,'0'], function (err, result) {
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
  });
});
router.get('/list/usercollect/office', function (req, res) {
  let userid = req.query.userid;
  res.conn.query("select * from officeinfo where officeid in (select roomid from usercollect where userid=? && type=?)", [userid,'1'], function (err, result) {
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
  });
});

// 获取用户个人信息
router.get('/userinfo', function (req, res) {
  console.log(req.query);
  let userid = req.query.userid;
  res.conn.query("select * from userinfo WHERE userid=?",[userid], function (err, result) {
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
  });
})

// 修改个人信息
router.get('/changeinfo', function (req, res) {
  console.log(req.query);
  let userid = req.query.userid;
  let username = req.query.username;
  let email = req.query.email;
  let address = req.query.address;
  res.conn.query("UPDATE userinfo SET username=?, email=?, address=? WHERE userid=?",[username,email,address,userid], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(
        {
          "code": 0,
          "msg": "",
          "count": 1000,
          "data": ''
        }
      )
    }
  });
});

//修改头像
router.get('/changeavatar', (req, res) => {
  
})

module.exports = router;
