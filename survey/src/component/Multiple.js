import React, {Component} from 'react'; 

class Multiple extends Component{
	render(){
		return(
			<div>
					<label>Have Llama:
						<input
							name="hasllama"
							type="checkbox"
							checked={this.props.hasllama}
							onChange={this.props.handleChange}/>
					</label>
					<br/>
					<label>
						number of llamas
						<input
							name="numberllama"
							type="number"
							value={this.props.numberllama}
							onChange={this.props.handleChange}
						/>
					</label>
					<button
				onClick={()=>{this.props.modeChange('results')}}>submit</button>
			</div>


			)
	}
}

export default Multiple;