var db = require('../models/DBConnect');

var BurgerSchema = db.mongoose.Schema({
	country: String,
	currency: String,//USD
	cost: Number,//Burger cost in native currency
	exchangerate: Number,//Exchange rate to USD
	value: Number//Percentage value compared to US cost
});

module.exports = db.mongoose.model('Burgers', BurgerSchema, 'Burgers');