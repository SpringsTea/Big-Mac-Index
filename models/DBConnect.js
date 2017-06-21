var mongoose = require('mongoose');
var fs = require('fs');

var config = null;

if (fs.existsSync('config.js')) {
   config = require('../config.js'); 
}
else{
	config = process.env;
}

var dbuser = process.env.dbuser || config.dbuser;
var dbpass = process.env.dbpass || config.dbpass;


mongoose.Promise = global.Promise; // use native mongoose promises﻿

//conntect to database
mongoose.connect( `mongodb://${dbuser}:${dbpass}@ds149551.mlab.com:49551/big_mac_index`, function( err, db ){
	if(err){
		console.log('Unable to connect to mongo. Error: ', err);
	}
	else{
		console.log('Mongo connection successful');
	}
});

module.exports = {
  mongoose: mongoose
}