$( document ).ready(function() {

    $('.country-selector').select2().on('change',function(val,test){
    	$this = $(this)
    	var exchange = $this.val();
    	var currency = $this.select2('data')[0].text;
    	console.log(currency);

    	$( ".panel-burger" ).each(function(index) {
		  	var cost = $(this).find('.native-cost').data('cost');
		  	var USexchange = $(this).find('.native-cost').data('exchange');
		  	var truecost = ((cost / USexchange) * exchange).toFixed(2);

		  	$(this).find('.true-cost .val').html(truecost + ' ' + currency);
		});
    })
    .val('1').trigger('change');//Choose US as default option
});