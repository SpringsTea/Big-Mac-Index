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

	updateTrueCost(selected){
		this.refs.burger.setTrueCost(selected);
	}

	render(){
		return (
			<div>
				<div class="row">
					Show me the true cost in
					<CurrencyDrop currencyChange = {(e) => this.updateTrueCost(e)} burgerdata = {this.state.burgerdata} />
				</div>

				<div class="row burger-panel-container">
				{this.state.burgerdata.map((item, index) => (
					<BurgerPanel ref="burger" key = {index} burgerdata = {item} />
				))}					
				</div>
			</div>
		);
	}
}
