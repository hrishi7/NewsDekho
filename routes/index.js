const express = require('express');
const router = express.Router();

//get homepage

router.get('/', function(req, res, next){
  res.render('newsHome/index', {title:'NewsDekho'});
});

module.exports = router;
