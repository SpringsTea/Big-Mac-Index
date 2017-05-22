var CurrencySchema = require('../schemas/currency');
var BurgerGraphModel = require('../models/BurgerGraphModel');//Generates burger array for pictograph

module.exports = function(app){

app.get('/', function(req, res){

	CurrencySchema.find()
	.then(function(data){
		console.log(data);
	})

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

	res.render('index', mdata);
	//$('.burger img[data-dec]').css({clip: "rect(0, 30px, 50px, 0)"});
});

}