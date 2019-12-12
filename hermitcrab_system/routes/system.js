var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json');

/* GET home page. */
router.get('/system', function (req, res, next) {
  if (req.cookies.authorized) {
    res.render('system', {
      name: req.cookies.authorized.value
    });
  } else {
    res.redirect('/');
  }
});

router.get('/system/lanmanage', function (req, res, next) {
  res.render('lanmanage', { title: 'System' });
});

router.get('/system/usermanage', function (req, res, next) {
  res.render('usermanage', { title: 'System' });
});

router.get('/system/ordermanage', function (req, res, next) {
  res.render('ordermanage', { title: 'System' });
});

router.get('/system/officemanage', function (req, res, next) {
  res.render('officemanage', { title: 'System' });
});

router.get('/system/srmanage', function (req, res, next) {
  res.render('srmanage', { title: 'System' });
});

router.get('/system/fd_addlist', function (req, res, next) {
  res.render('fd_addlist', { title: 'System' });
});

router.get('/system/zxs_addlist', function (req, res, next) {
  res.render('zxs_addlist', { title: 'System' });
});

router.get('/system/bgs_addlist', function (req, res, next) {
  res.render('bgs_addlist', { title: 'System' });
});


router.get('/userlist', function (req, res, next) {
  res.json(
    {
      "code": 0,
      "msg": "",
      "count": 1000,
      "data": [
        {
          "id": 10000,
          "username": "user-0",
          "sex": "女",
          "city": "城市-0",
          "sign": "签名-0",
          "experience": 255,
          "logins": 24,
          "wealth": 82830700,
          "classify": "作家",
          "score": 57
        }
      ]
    }
  );
});

router.post('/system/addfd', function (req, res, next) {
  let name = req.body.fd_name;
  let sex = req.body.fd_sex;
  let phone = req.body.fd_tel;
  let avatar = req.body.file;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into fdinfo(name, sex, phone, avatar) values(?, ?, ?, ?)", [name, sex, phone, avatar], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

router.post('/system/addzxs', function (req, res, next) {
  let name = req.body.zxs_name;
  let address = req.body.zxs_address;
  let price = req.body.zxs_price;
  let ownerid = req.body.zxs_ownerid;
  let type = req.body.zxs_kind;
  let city = req.body.zxs_city;
  let quyu = req.body.zxs_quyu;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into srinfo(srname, sraddress, price, ownerid, type, city, region) values(?, ?, ?, ?, ?, ?, ?)", [name, address, price, ownerid, type, city, quyu], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

router.post('/system/addbgs', function (req, res, next) {
  let name = req.body.bgs_name;
  let address = req.body.bgs_address;
  let price = req.body.bgs_price;
  let ownerid = req.body.bgs_ownerid;
  let area = req.body.bgs_area;
  let city = req.body.bgs_city;
  let quyu = req.body.bgs_quyu;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("insert into officeinfo(officename, officeaddress, price, ownerid, area, city, region) values(?, ?, ?, ?, ?, ?, ?)", [name, address, price, ownerid, area, city, quyu], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

router.get('/system/deluser', function (req, res, next) {
  let userId = req.query.userid;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from userinfo where userid=?", [userId], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

router.get('/system/delfd', function (req, res, next) {
  let Id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from fdinfo where id=?", [Id], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

router.get('/system/delsr', function (req, res, next) {
  let Id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from srinfo where srid=?", [Id], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

router.get('/system/deloffice', function (req, res, next) {
  let Id = req.query.id;
  let con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from officeinfo where officeid=?", [Id], function (err, result) {
    if (err) {
      console.log(err);
    }
  });
})

module.exports = router;