import React, { Component } from 'react';
import Input from './component/Input'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      input: '',
      onChange:'',
      mode:'input'
    }
  }
handleChange(event){
 const target = event.target, 
 value = target.value,
 name= target.name
 this.setState({
  [name]: value
 })
}
modeChanger(e){
let modeType = ["select", "multiple", "input"];
modeType.forEach((mode)=>{e===mode?this.setState({mode:mode}):console.log(e)})
}
// render main views 
modeRender(){
let mode = this.state.mode 
if(mode === 'select'){
  console.log('select')
  return(
    <div>
      select
    </div>
    )
}else if(mode ==="multiple"){
  console.log('multiple')
  return(
    <div>multiple</div>)
}else{
  console.log('input')
  return(
    <div className="input-container">
        <Input
        input = {this.state.input}
        handleChange={this.handleChange.bind(this)}
        />
    </div>)
}
}

  render() {
    return (
      <div className="container">
      {this.modeRender()}
        
      </div>
    );
  }
}

export default App;
