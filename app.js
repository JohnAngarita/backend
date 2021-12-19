var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
testAPIRouter = require("./routes/testAPI");
var app = express();
const database = require('./database');
// const api = require("../api/routes/users");

// base de datos
database.init();
// var Schema = mongoose.Schema;

// mongoose.connect('mongodb:http://localhost:3000');

// var userSchemaJSON = {
//   nombre: String,
//   clave: String
// };

// var User_schema = new Schema(userSchemaJSON);

// var User = mongoose.model("User", User_schema);
// fin base de datos

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// app.get("/api/v1", api)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
// app.use("/routes/users", usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//  usuarios bases de datos
// app.post("/users", function(req, res){
//   var user = new User({nombre: req.body.nombre, clave: req.body.clave});

//   user.save(function(){
//     res.send("Recibimos tus datos");
//   });
// });
// fin usuarios base de datos

module.exports = app;
