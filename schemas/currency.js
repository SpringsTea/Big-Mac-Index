var db = require('../models/DBConnect');

var CurrencySchema = db.mongoose.Schema({
	country: String,
	currency: String,
	val: Number//Value in CAD
});

module.exports = db.mongoose.model('Currency', CurrencySchema, 'Currency');