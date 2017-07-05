var BurgerSchema = require('../schemas/burger');
var BurgerGraphModel = require('../models/BurgerGraphModel');//Generates burger array for pictograph
var USBurger = 5.06;//Cosntant for the cost of an ammerican burger in usd


module.exports = function(app){

app.get('/', function(req, res){

	var mdata = {
		headScripts: ['https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js',
						'/assets/js/country_dropdown.js',
						'/assets/js/burger_graph.js'],
		headStyles: ['/assets/css/styles.css',
					'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css'	],
		footScripts: ['/assets/js/client.min.js']
	}

	
	res.render('index', mdata);
});

app.get('/burgerdata', function(req, res){
	BurgerSchema.find().lean()
	.then(function(burgerdata){

		var data = burgerdata;

		data.forEach(function(obj){
			var cost 		= obj.cost;
			var exchange 	= obj.exchangerate;
			var BurgerQty 	= USBurger / (cost / exchange);

			obj.cost = (cost).toFixed(2);;
			obj.quantity = (BurgerQty).toFixed(2);
			obj.graph = BurgerGraphModel.getBurgers(BurgerQty);
		})
		
		return data;

	})
	.then(function(result){
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(result));
	})
	.then(undefined,function(err){
		console.log("Error: "+err);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({'error' : err}));
	})
});

}