import React from "react";
import axios from 'axios';

import CurrencyDrop from "./CurrencyDrop";
import BurgerPanel from "./BurgerPanel";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state ={
			burgerdata: []
		}
		this.getBurgerData();
	}

	getBurgerData(){
		axios.get('/burgerdata')
			.then(res => {
				const burgerdata = res.data;
				this.setState({burgerdata});
			})
	}

	render(){
		return (
			<div>
				<div class="row">
					Show me the true cost in
					<CurrencyDrop burgerdata = {this.state.burgerdata} />
				</div>

				<div class="row burger-panel-container">
				{this.state.burgerdata.map((item, index) => (
					<BurgerPanel key = {index} burgerdata = {item} />
				))}					
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