const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { Food, User, Booking, Restaurant } = require('../models');
const { findAll } = require('../models/user');
const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.get('/contact', function(req, res, next) {
  res.render('contact.html', {
  });
});
router.get('/event', function(req, res, next) {
  res.render('event.html', {
  });
});
router.get('/contact', function(req, res, next) {
  res.render('contact.html', {
  });
});
router.get('/login', function(req, res, next) {
  res.render('login.html', {
  });
});
router.get('/reservation', isLoggedIn, function(req, res, next) {
  res.render('reservation.html', {
  });
});
router.get('/seat', isLoggedIn,  function(req, res, next) {
  res.render('seat.html', {
  });
});
router.get('/menu_dessert', function(req, res, next) {
  res.render('menu_dessert.html', {
  });
});
router.get('/menu_steak', function(req, res) {
  res.render('menu_steak.html', {
  });
});
router.get('/menu_pasta', function(req, res) {
  res.render('menu_pasta.html', {
  });
});
router.get('/join', function(req, res) {
  res.render('join.html', {
  });
});
router.get('/manager', function(req, res) {
  res.render('manager.html', {
  });
});
router.get('/statistic', function(req, res) {
  res.render('statistic.html', {
  });
});
router.get('/customer_info', function(req, res) {
  res.render('customer_info.html', {
  });
});


router.post('/manager', (req, res) => {
  console.log(req.body.code);
  if(req.body.code === 'se_project'){
    console.log('성공');
    return res.redirect('/manager');
  }
  else{
    res.send('<script>alert("인증코드 불일치");location.href="/";</script>');
}
});

/*
router.get('/test',async( req,res,next)  => {
  try {
    const user = await User.findOne({where : {provider : 'local'}});
    console.log(user.id);
    res.render('test.ejs', {
      title: 'test',
      user,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});
*/

module.exports = router;