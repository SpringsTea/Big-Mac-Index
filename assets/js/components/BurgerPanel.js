import React from "react";

export default class BurgerPanel extends React.Component{
	constructor(){
		super();
		this.state = {
			truecost: ""
		}
	}

	componentDidMount(){

		$( '.burger img[data-dec]' ).each(function( index ) {
		  var $this = $(this);

		  var dec = $this.data('dec');
		  dec = dec * 50;// turn dec from a percentage to image width (50px image)

		  //values less than 10px are not really visable
		  if(dec < 10){
		  	dec = 10;
		  }

		  $this.css({clip: "rect(0, "+dec+"px, 50px, 0)"});
		});

		$('.animate-burger').animate({
	    	width: "0"
	    }, 2000, 'linear')
	}

	componentWillReceiveProps (newProps){
		this.setTrueCost(newProps.selected);
	}

	setTrueCost(selected){
		let exchange = selected.value;
		let currency = selected.label;

		let burgerdata = this.props.burgerdata;
		let cost = burgerdata.cost;
		let USexchange = burgerdata.exchangerate;

		let truecost = ((cost / USexchange) * exchange).toFixed(2);

		this.setState({truecost:truecost + ' ' + currency});
	}

	render(){
		let burgerdata = this.props.burgerdata;
		return (
			<div class="col-lg-4 panel-burger">
				<div class="panel panel-default">
				  <div class="panel-heading">{burgerdata.country}</div>
				  <div class="panel-body"> 
				  	<div class="native-cost" data-cost={burgerdata.cost} data-exchange={burgerdata.exchangerate}>
						Burger Cost: {burgerdata.cost} {burgerdata.currency}
					</div>
					<div class="true-cost">
						True Cost: <span class="val">{this.state.truecost}</span>
					</div>
					 <div class="container-fluid burgers">
						<div class="row graph">
							<div class="animate-burger"></div>
								{burgerdata.graph.map((item, index) => (
									<div key={index} class="burger">
										<img 
										data-dec={item.dec}
										src="http://www.mcdonalds.ca/content/dam/Canada/en/product_pages/burgers-sandwiches/hero/hero_big-mac.png" />
									</div>
								))}	
						</div>
					 </div>
				  </div>
				</div>				
			</div>
		);
	}
}