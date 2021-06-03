const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { Post, User } = require('../models');
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





module.exports = router;