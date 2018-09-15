import React, { Component } from 'react';
import Input from './component/Input'
import Select from './component/Select'
import Multiple from './component/Multiple'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      input: '',
      select:'llama',
      hasllama:false,
      numberllama:2,
      onChange:'',
      mode:'input'
    }
  }
handleChange(event){
  console.log(event.target.value);
 const target = event.target, 
 value = target.type==='checkbox'?target.checked:target.value,
 name= target.name
 console.log(name);
 this.setState({
  [name]: value
 })
}
modeChanger(e){
  console.log(e)
let modeType = ["select", "multiple", "input", "results"];
modeType.forEach((mode)=>{e===mode?this.setState({mode:mode}):console.log(e)})
}
handleSubmit(event){
    event.preventDefault();
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
    <div className="input-container">
        <Multiple
            hasllama={this.state.hasllama}
            numberllama={this.state.numberllama}
            handleChange={this.handleChange.bind(this)}
            modeChange={this.modeChanger.bind(this)}
          />
    </div>)
}else if(mode==="results"){
  return(
      <div className='input-container'>
        <div>
            <h1>name: {this.state.input}</h1>
        </div>
        <div>
            <h2>type : {this.state.select}</h2><br/>
        </div>
        <p> has llama : {this.state.hasllama}</p><br/>
        <p>number of llamas {this.state.numberllama}</p>
      </div>
    )
}else{
  console.log('input')
  return(
    <div className="input-container">
        <Input
        input = {this.state.input}
        handleChange={this.handleChange.bind(this)}
        modeChange={this.modeChanger.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
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
