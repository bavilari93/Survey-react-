import React, { Component } from 'react';
import Input from './component/Input'
import Select from './component/Select'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      input: '',
      select:'',
      onChange:'',
      mode:'input'
    }
  }
handleChange(event){
  console.log(event);
 const target = event.target, 
 value = target.value,
 name= target.name
 console.log(name);
 this.setState({
  [name]: value
 })
}
modeChanger(e){
  console.log(e)
let modeType = ["select", "multiple", "input"];
modeType.forEach((mode)=>{e===mode?this.setState({mode:mode}):console.log(e)})
}
// render main views 
modeRender(){
let mode = this.state.mode 
if(mode === 'select'){
  console.log('select')
  return(
    <div className="input-container">
     <Select
        value ={this.state.select}
        handleChange={this.handleChange.bind(this)}
        modeChange={this.modeChanger.bind(this)}
      />
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
        modeChange={this.modeChanger.bind(this)}
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
