const express = require('express');

const router = express.Router();

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
router.get('/reservation', function(req, res) {
  res.render('reservation', {
  });
});
router.get('/seat', function(req, res) {
  res.render('seat', {
  });
});


module.exports = router;