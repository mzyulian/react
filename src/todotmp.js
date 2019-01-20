import React, { Component } from 'react';
//组件化的形式引入todo
import Input from './components/input'
import Todolist from './components/Todo'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Todomsg:[
        {id:0,text:'REACT'},
        {id:1,text:'vue'},
        {id:2,text:'ng'}
      ]
    }
  }
  render() {
    return (
        <div>
          <h3>todo</h3>
          <Input submitVal={this.getVal}/>
          {
            this.state.Todomsg.map((item)=>{
              /* 绑定一个属性，属性在绑定一个方法 */
              return <Todolist  {...item} key={item.id} delTodomsg={ this.hanDelTodo }/>           
            })
          }
        </div>
    )
  }
  /* 组件绑定的属性调用到父组件的方法 */
  hanDelTodo=(id)=>{
    //根据id寻找索引,传入数组的每一项，返回id相同的那一项
    let idx=this.state.Todomsg.findIndex(item=>item.id===id)
    //重置state前，讲数组更改好
    let newArr=this.state.Todomsg
    //删除对应索引的数据
    newArr.splice(idx,1)
    this.setState({
      Todomsg:newArr
    })
  }
  //子组件input绑定属性定义的一个方法，向父组件数组添加值
  getVal=(val)=>{
     console.log(val)
     //创建一个id,数组为空的话id为0,否则为数组最后项id+1
     let id=this.state.Todomsg.length===0?0:this.state.Todomsg[this.state.Todomsg.length-1].id+1
     //设置数组，用concat 连接的方式
     this.setState({
       Todomsg:this.state.Todomsg.concat({id:id,text:val})
     })
  } 
}

export default App;
