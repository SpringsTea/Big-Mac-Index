$( document ).ready(function() {

	$( '.burger img[data-dec]' ).each(function( index ) {
	  $this = $(this);

	  var dec = $this.data('dec');
	  dec = dec * 50;// turn dec from a percentage to image width (50px image)

	  //values less than 10px are not really visable
	  if(dec < 10){
	  	dec = 10;
	  }

	  $this.css({clip: "rect(0, "+dec+"px, 50px, 0)"});
	});

});