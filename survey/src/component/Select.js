import React , {Component} from 'react'; 

class Select extends Component{
	render(){
		return(
			<div>
			<select
					name="select"
					value={this.props.value}
					onChange={this.props.handleChange}
				>
				<option
					name="select"
					value="llama">llama
				</option>
				<option 
					name="select"
					value="cow">cow
				</option>
				<option 
					name="select"
					value="dog">dog
				</option>
			</select>
			<button
				onClick={()=>{this.props.modeChange('multiple')}}>submit</button>
			</div>
			

			)
	}
}

export default Select;