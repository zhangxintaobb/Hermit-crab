var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 用户列表
router.get('/list/user', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from userinfo", function (err, result) {
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
router.get('/list/fd', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from fdinfo", function (err, result) {
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
router.get('/list/sr', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from srinfo", function (err, result) {
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
router.get('/list/sr/detail', function (req, res, next) {
  // console.log(req.query.id);
  let id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from srinfo where srid = " + id, function (err, result) {
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
router.get('/list/office', function (req, res, next) {
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from officeinfo", function (err, result) {
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
router.get('/list/office/detail', function (req, res, next) {
  let id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from officeinfo where officeid = " + id, function (err, result) {
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
router.post('/adduser', function (req, res, next) {
  let name = req.body.username;
  let pwd = req.body.pwd;
  let address = req.body.address;
  let sex = req.body.sex;
  let phone = req.body.phone;
  let email = req.body.email;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into userinfo(username, sex, phone, address, email, password) values(?, ?, ?, ?, ?, ?)",[name, sex, phone, address, email, pwd], function(err, result) {
    if(err) {
      console.log(err);
    }
  });
  res.end('注册成功！！');
})

//登录

router.get('/login', function (req, res, next) { //添加的代码
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from userinfo", function (err, result) {
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

//个人信息
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

//收藏信息
router.get('/collection', function (req, res, next) { //添加的代码
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


//删除收藏
router.get('/collection/delete', function (req, res, next) {
  let srid = req.query.srid;
  let userid = req.query.userid
  console.log(srid)
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from usercollect where roomid=? && userid=?", [srid,userid], function (err, result) {
    if (err) {
      console.log(err);
    }
    else{
      console.log(result)
    }
  });
})

//提交评价
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

//登录，获取所有用户信息
router.get('/login', function (req, res, next) { 
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from userinfo", function (err, result) {
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

//获取未付款的租赁记录
router.get('/order/unpay', function (req, res, next) { //添加的代码
  console.log(req.query.userid)
  let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from srinfo where srid in (select roomid from userorder where userid = ? && pay = ? )",[req.query.userid,0] , function (err, result) {
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

//获取未评价的租赁记录

router.get('/order/uncommit', function (req, res, next) { //添加的代码
  console.log(req.query)
  let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from srinfo where srid in (select roomid from userorder where userid = ? && pay = ? && commit = ?)",[req.query.userid,1,0] , function (err, result) {
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

//付款
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

//修改个人信息

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

//获取评价
router.get('/record', function (req, res, next) { //添加的代码
  console.log(req.query.userid)
        let con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from userorder where userid = ? && commit = ?",[req.query.userid,1], function (err, result) {
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

//获取评价的房屋信息

router.get('/record/room', function (req, res, next) { //添加的代码
  console.log(req.query.room)
        let con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from srinfo where srid in"+req.query.room, function (err, result) {
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

 //获取自习室信息
 
router.get('/studyroom', function (req, res, next) { //添加的代码
  console.log(req.query.srid)
let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from srinfo where srid = ?",[req.query.srid], function (err, result) {
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

//获取收藏信息
router.get('/collection/srinfor', function (req, res, next) { //添加的代码
  console.log(req.query.userid)
        let con = mysql.createConnection(dbconfig);
    con.connect();
    con.query("select * from usercollect where userid = ? && roomid = ?",[req.query.userid,req.query.srid], function (err, result) {
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


  //添加收藏

router.get('/collection/add', function (req, res, next) { //添加的代码
  console.log(req.query.createtime);
  const createtime=req.query.createtime
  const userid=req.query.userid
  const roomid=req.query.srid
  let con = mysql.createConnection(dbconfig);
  con.query("insert into usercollect(createtime, userid, type, roomid) values(?, ?, ?, ?)", [createtime,userid,0,roomid], function (err, result) {
    if (err) {
      console.log(err);
    }
    else{
    console.log(result);
    }
  });
})


//显示评价内容
router.get('/commit/content', function (req, res, next) { //添加的代码
  console.log(req.query.roomid)
let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from userorder where roomid = ? && commit = ?",[req.query.roomid,1], function (err, result) {
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

//通过userid寻找user
router.get('/finduser', function (req, res, next) { //添加的代码
  console.log(req.query.userid)
let con = mysql.createConnection(dbconfig);
con.connect();
con.query("select * from userinfo where userid in"+req.query.userid, function (err, result) {
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
