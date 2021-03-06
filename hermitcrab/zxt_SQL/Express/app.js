var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')	
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var personRouter = require('./routes/person')
var loginRouter = require('./routes/login')
var collectionRouter = require("./routes/collection")
var orderRouter = require("./routes/order")
var studyroomRouter =require("./routes/studyroom")
var commitRouter=require("./routes/commit")
var recordRouter=require("./routes/record")
var payRouter=require("./routes/pay")
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
  });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', personRouter);
app.use('/', loginRouter);
app.use("/",collectionRouter);
app.use("/",orderRouter);
app.use("/",studyroomRouter);
app.use("/",commitRouter)
app.use("/",recordRouter)
app.use("/",payRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
