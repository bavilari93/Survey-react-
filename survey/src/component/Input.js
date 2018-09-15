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
				<button
					type="submit" 
					value="Submit"
					onClick={()=>{this.props.modeChange('select')}}>submit</button>
			</div>

			)
	}
}

export default Input;