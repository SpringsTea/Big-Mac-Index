//Generate x Burger objects, including one for decimal
var getBurgers = function(qty){
	
	var whole = Math.floor(qty);
	var dec = (qty % 1).toFixed(2);

	var burgers = [];

	for (var i = 1; i <= whole; i++){
		var burger = {
			index : i
		}

		burgers.push(burger);
	}

	//If there is a decimal, add an object and specify the percentage
	if( dec > 0 ){
		var burger = {
			index : burgers.length,
			dec: dec
		}
		burgers.push(burger);
	}

	return burgers;
}

module.exports = {
  getBurgers: getBurgers
}