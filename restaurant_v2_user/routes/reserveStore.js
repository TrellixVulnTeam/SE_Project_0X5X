const express = require('express');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const Booking = require('../models/Booking');

const router = express.Router();

router.post('/reserveStore', async ( req, res, next) => {
    const {table, date, time, cover, name, check} = req.body;
      await Booking.create({
        table,
        date,
        time,
        cover,
        name,
      });
      return res.redirect('/');
});

Post.findAll({
    where: {
      table: 2
    }
  });

  const i = await Booking.findAll({ where: { Table } });

  console.log(i);

    if (i == $('.seat').tableNum) {
        $('#T[i]').addClass('alreadyReserved');
    }