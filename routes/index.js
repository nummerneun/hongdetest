var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: '主页'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: '说明'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: '联络'
  });
});

module.exports = router;

