import React from "react";
import Select from "react-select";

import style from 'react-select/dist/react-select.css';
//require('react-select/dist/react-select.css');

export default class CurrencyDrop extends React.Component{
	constructor(){
		super();
		this.state = {
			currency: null
		}
	}

	onHandelChange(e){
		this.props.currencyChange(e);
		this.setState({currency:e.value});
	}

	render(){
		var Select = require('react-select');
		var options = [];

		this.props.burgerdata.forEach(function(item){
			let option = {value:'', label:''};
			option.value = item.exchangerate;
			option.label = item.currency;

			options.push(option);
		})		

		return (
			<div>
				<Select
					name="currency-select"
					value={this.state.currency}
					placeholder = "Select a currency"
					onChange={this.onHandelChange.bind(this)}
					options={options}	/>
			</div>
		);
	}
}