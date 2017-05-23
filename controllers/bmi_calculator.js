var BurgerSchema = require('../schemas/burger');
var BurgerGraphModel = require('../models/BurgerGraphModel');//Generates burger array for pictograph

module.exports = function(app){

app.get('/', function(req, res){

	var mdata = {
		headScripts: ['https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js',
						'/assets/js/country_dropdown.js'],
		headStyles: ['/assets/css/styles.css',
					'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css'	],
		burgers: {
			qty: 4.3,
			graph: BurgerGraphModel.getBurgers(4.3)
		}
	}

	BurgerSchema.find()
	.then(function(burgerdata){
		mdata.burgerdata = burgerdata;
	})
	.then(function(result){
		res.render('index', mdata);
		//$('.burger img[data-dec]').css({clip: "rect(0, 30px, 50px, 0)"});
	})
	.then(undefined,function(err){
		console.log("Error: "+err);
	})

});

}