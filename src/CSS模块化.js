import React, { Component } from 'react';
import './App.css';
import index from './index1.css'
// const Hastyle={
//   height:'50',
//   backgroundColor:'red'
// }
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mint:false
    }
  }
  render(){
    //声明一个内联表达式的变量,定义样式的对象需要放在render函数中
    const Hastyle={
      color:'red',
      fontSize:'30',
      backgroundColor:'blue',
      height:this.state.mint?'100px':'20px'
    }
    return(
      //css配置需要配置config配置 在react-script 下配置， 加入modules: true,
      <div>
        <div style={Hastyle}>hahha</div>
        <div className='colorred'>red</div>
        <div className={index.main}>css模块化</div>
      </div>
    )
  }
}

export default App;
