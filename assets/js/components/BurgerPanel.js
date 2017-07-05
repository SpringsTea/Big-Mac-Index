import React from "react";

export default class BurgerPanel extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){
		$('.animate-burger').animate({
	    	width: "0"
	    }, 2000, 'linear')
	}

	render(){
		let burgerdata = this.props.burgerdata;
		console.log(burgerdata);
		return (
			<div class="col-lg-4 panel-burger">
				<div class="panel panel-default">
				  <div class="panel-heading">{burgerdata.country}</div>
				  <div class="panel-body"> 
				  	<div class="native-cost" data-cost={burgerdata.cost} data-exchange={burgerdata.exchangerate}>
						Burger Cost: {burgerdata.cost} {burgerdata.currency}
					</div>
					<div class="true-cost">
						True Cost: <span class="val"></span>
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