var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();

/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "select id, email,name,phoneNumber,date_format(createdAt,'%Y-%m-%d %H:%i:%s') createdAt,provider from user";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('list', {rows: rows});
    });
});
router.get('/list', function(req, res, next) {
    var sql = "select id, email,name,phoneNumber,date_format(createdAt,'%Y-%m-%d %H:%i:%s') createdAt,provider from user";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('list', {rows: rows});
    });
});

router.get('/reservation', function(req, res, next) {
    var sql = "select id,name,date_format(date,'%Y-%m-%d') date,cover,number,reserve_time from booking";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('reservation', { rows: rows});
    });
});

router.get('/statistic', function(req, res, next) {
    var sql = "select revenue from restaurant where date='2021-06-02'";
    conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('statistic');
    });
});

router.get('/day_revenue', function(req, res, next) {
    res.render('day_revenue', {
    });
});
router.get('/write', function(req,res,next){
    res.render('write',{title : "예약하기"});
});

router.post('/write', function(req,res,next){
    var name = req.body.name;
    var date = req.body.date; //예약날짜
    var cover = req.body.cover; //예약인원
    var number = req.body.number; //테이블넘버
    var reserve_time = req.body.reserve_time; //예약시간
    var datas = [name,date,reserve_time,cover,number];


    var sql = "insert into booking(name, date,reserve_time ,cover,number) values(?,?,?,?,?)";
    conn.query(sql,datas, function (err, rows) {
        if (err) console.error("err : " + err);
        res.redirect('/reservation');
    });
});
router.get('/read/:id',function(req,res,next)
{
    var id = req.params.id;
    var sql = "select id,name,date,reserve_time,cover,number from booking where id=?";
    conn.query(sql,[id], function(err,row)
    {
        if(err) console.error(err);
        res.render('read', {title:"예약변경", row:row[0]});
    });
});


router.post('/update',function(req,res,next)
{
    var id = req.body.id;
    var name = req.body.name;
    var date = req.body.date;
    var cover = req.body.cover;
    var number = req.body.number;
    var reserve_time = req.body.reserve_time;
    var datas = [name,date,reserve_time,cover,number,id];


    var sql = "update booking set  name=? ,date=?,reserve_time=?,cover=?, number=?  where id=?";
    conn.query(sql,datas, function(err,result) {
        if(err) console.error("err : " + err);
        res.redirect('/reservation');
    });
});

router.get('/delete/:id',function(req,res,next)
{
    var id = req.params.id;
    var sql = "delete from booking where id=?";

    conn.query(sql,[id], function(err,row)
    {
        if(err) console.error(err);
        {
            res.send('<script>alert("삭제되었습니다");location.href="/reservation";</script>');

        }
    });
});


module.exports = router;
