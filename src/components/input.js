import React, { Component } from 'react'
//组件的方式创建一个输入框 exports defalut
export default class Input extends Component{
    constructor(props){
      super(props)
      this.state={
        inputVal:''
      }
    }
    render(){
      return (
        <div>
          {/* 绑定受控表单的value,利用onchange事件，来输入值,绑定键盘弹起事件 */}
          <input type='text' value={this.state.inputVal} onChange={this.changeVal} onKeyUp={this.emitVal}></input>
        </div>
      )
    }
    /* 事件对象e传递值 */
    changeVal=(e)=>{
      console.log(e.target.value)
      this.setState(
        {inputVal:e.target.value}
      )
    }
    /* 键盘的弹起事件,键盘弹起的时候向父组件传递一个参数 */
    emitVal=(e)=>{
      /* 判断当前的键盘code */
      if(e.keyCode===13){
        //清空input框
        this.setState({
          inputVal:''
        })
        //传值到父组件，props的形式，父组件给子组件定义一个props
        //调用属性方法
        this.props.submitVal(this.state.inputVal)
      }
    }
  }