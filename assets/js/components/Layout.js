import React from "react";

import CurrencyDrop from "./CurrencyDrop";
import BurgerPanel from "./BurgerPanel";

export default class Layout extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<div class="row">
					Show me the true cost in
					<CurrencyDrop />
				</div>

				<div class="row burger-panel-container">
					<BurgerPanel />
				</div>
			</div>
		);
	}
}


// <div class="row">
// Show me the true cost in 
// 	<select class="country-selector">
// 		{{#burgerdata}}
// 			<option value="{{exchangerate}}">{{currency}}</option>
// 		{{/burgerdata}}
// 	</select>
// </div>
// <div class="row burger-panel-container">
// 	{{#burgerdata}}
// 		{{>burger-panel}}
// 	{{/burgerdata}}
// </div>