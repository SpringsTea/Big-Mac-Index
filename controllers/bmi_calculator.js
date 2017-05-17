//Generates burger array for pictograph
var BurgerGraphModel = require('../models/BurgerGraphModel');

module.exports = function(app){

app.get('/', function(req, res){

	var mdata = {
		headStyles: ['/assets/css/styles.css'],
		burgers: {
			qty: 4.3,
			graph: BurgerGraphModel.getBurgers(4.3)
		}
	}

	res.render('index', mdata);
	//$('.burger img[data-dec]').css({clip: "rect(0, 30px, 50px, 0)"});
});

}