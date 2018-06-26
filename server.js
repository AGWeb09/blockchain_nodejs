var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();

var blockchain = require('./model/blockchain');
var network = require('./model/network');

blockchain.init();
network.init();

var app = express(),
    server = require('http').createServer(app);
server.listen(9999);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);


/* GET home page. */
router.get('/chain', function(req, res, next) {
  res.send(blockchain.getChain());
});


router.get('/nodes', function(req, res, next) {
  res.send(network.getNodes());
});

router.post('/nodes/register', function(req, res, next) {
  var added = network.registerNode(req.headers.host);
  res.send(added);
});



app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.log("App.js Error: " , err, req.url);
	res.render('error', {
		message: err.message,
		error: err
	});
});





module.exports = app;
