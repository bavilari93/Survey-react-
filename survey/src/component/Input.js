import React, {Component} from 'react';

class Input extends Component{
	render(){
		return(
			<div>
				<input
				type = "text"
				name="input"
				value={this.props.input}
				onChange={(e)=>{this.props.handleChange(e)}}
				/>
			</div>
			)
	}
}

export default Input;