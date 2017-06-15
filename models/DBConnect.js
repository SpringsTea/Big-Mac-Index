var mongoose = require('mongoose');
var config = require('../config');

var dbuser = process.env.dbuser || config.dbuser;
var dbpass = process.env.dbpass || config.dbpass;

console.log('HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!V');
console.log(process.env);

mongoose.Promise = global.Promise; // use native mongoose promises﻿

//conntect to database
mongoose.connect( `mongodb://${dbuser}:${dbpass}@ds149551.mlab.com:49551/big_mac_index` );

module.exports = {
  mongoose: mongoose
}