const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const { Post, User } = require('../models');
const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/', function(req, res) {
  res.render('index', {
  });
});
router.get('/menu', function(req, res) {
  res.render('menu', {
  });
});
router.get('/menu_2', function(req, res) {
  res.render('menu_2', {
  });
});
router.get('/contact', function(req, res) {
  res.render('contact', {
  });
});
router.get('/event', function(req, res) {
  res.render('event', {
  });
});
router.get('/event_2', function(req, res) {
  res.render('event_2', {
  });
});
router.get('/event_3', function(req, res) {
  res.render('event_3', {
  });
});
router.get('/contact', function(req, res) {
  res.render('contact', {
  });
});
router.get('/login', function(req, res) {
  res.render('login', {
  });
});
router.get('/reservation', isLoggedIn, function(req, res) {
  res.render('reservation', {
  });
});
router.get('/seat', isLoggedIn,  function(req, res) {
  res.render('seat', {
  });
});
router.get('/menu_dessert', function(req, res) {
  res.render('menu_dessert', {
  });
});
router.get('/menu_steak', function(req, res) {
  res.render('menu_steak', {
  });
});
router.get('/menu_pasta', function(req, res) {
  res.render('menu_pasta', {
  });
});
router.get('/join', function(req, res) {
  res.render('join', {
  });
});



module.exports = router;