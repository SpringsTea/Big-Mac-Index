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

/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };   

console.log(dbuser);
console.log(dbpass);

//conntect to database
mongoose.connect( `mongodb://${dbuser}:${dbpass}@ds149551.mlab.com:49551/big_mac_index`, options );

var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = {
  mongoose: mongoose
}