/* react 路由跳转 */
import React, { Component } from 'react'
//跳转需要引入router 组件 Redirect组件处理404 未匹配到的路由
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'
//类的形式创建一个组件
//首页跳转组件
const Index=(props)=>{
  return(
    <div>我是首页组件{props.name}</div>
  )
}
//组件二 类的形式来写一个组件，方便查看参数
class Product  extends Component{
  /* 类的形式创建的组件有生命周期 */
  componentDidMount(){
    /* this.props.match.params.参数名可以获取到传递得参数 */
    console.log(this.props);
  }
    constructor(props){
      super(props)
      this.state={}
    }
    render(){
      return (
        <div>这是商品组件,获取到传递过来的id为{this.props.match.params.id}
        <button onClick={this.jumpTo}>选购</button>
        {/* Route 引入一个组件*/}
        <Route path='/product/:id/buy' render={()=><div>button组件js代码跳转</div>}/>
        </div>
      )
    }
    //js代码跳转
    jumpTo=()=>{
      //js代码跳转
      this.props.history.push(`/product/${this.props.match.params.id}/buy`)
    }
}
//组件三 404组件
const Notfound=()=>{
  return(
    <div>未找到</div>
  )
}

class App extends Component {
     constructor(props){
       super(props)
       this.state={}
     }
    render(){
     return(
       /* 需要跳转的组件要用HashRouter抱起来 */
       <Router>
       <div>
         <ul>
           <li><Link to="/Index">首页</Link></li>
           <li><Link to="/product/33">商品页</Link></li>
           <li>详情页</li>
         </ul>
         <Switch>
         {/* 编写跳转的组件路径，以及传递参数,render 函数的形式来跳转到匹配到的租价 */}
         <Route path='/' exact render={()=><Index name="props传递参数"/>}/>
         {/* 路由组件传递参数，用render 函数的形式 传递参数用 ...props 展开 */}
         <Route path="/product/:id" render={(props)=><Product {...props}/>}/>
         {/* 定义一个未找到的组件，404 */}
         <Route path='/404' render={()=><Notfound/>}/>
         <Redirect to="/404"/> 
         </Switch>
       </div>
       </Router>
     )
    }
}
export default App
