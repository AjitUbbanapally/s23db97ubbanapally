var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var GiraffeRouter = require('./routes/Giraffe');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Giraffe = require("./models/Giraffe");
var resourceRouter = require('./routes/resource');
var Giraffe1Router = require('./routes/Giraffe1');




var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Giraffe', GiraffeRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);
app.use('/Giraffe1', Giraffe1Router);

// We can seed the collection if needed on

async function recreateDB() {
  // // Delete everything
  await Giraffe.deleteMany();
  let instance1 = new
    Giraffe({ Giraffe_breed: "Reticulated giraffe", Giraffe_age: 5, Giraffe_heightfeet: 15 });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });

  let instance2 = new
    Giraffe({ Giraffe_breed: "Masai giraffe", Giraffe_age: 6, Giraffe_heightfeet: 16 });
  instance2.save().then(doc => {
    console.log("second object saved")
  }
  ).catch(err => {
    console.error(err)
  });

  let instance3 = new
    Giraffe({ Giraffe_breed: "South African giraffe", Giraffe_age: 8, Giraffe_heightfeet: 18 });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });

}
let reseed = false;
if (reseed) { recreateDB(); }





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

