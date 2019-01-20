import React, { Component } from 'react';
//react-router的使用
//1.首先在react-router-dom 中引入HashRouter或者BrowserRouter
//2.用HashRouter或者BrowserRouter，将需要跳转的元素包裹
//3.引入Router匹配路由规则
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
//类的形似创建组件
//组件1
const Index=(props)=>{
  return (
    <div>我是首页{props.name}</div>
  )
}
//组件2
const Product=()=>{
  return (
    <div>我是product</div>  )
}
class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  /* render函数创建 */
  render(){
    return (
      /* 将下面的内容用HashRouter包裹,注意根节点 */
      <Router>
      <div>
        <ul>
          {/* 引入link组件，有一个属性to，代表的是条状的路径 */}
          <li><Link to='/Index'>首页</Link></li>
          <li><Link to='/Product'>蔬菜</Link></li>
          <li><Link to='/Product'>水果</Link></li>
        </ul>
        {/* 
        4.配置路由规则，通过Route组件来匹配路由规则
           注意:Route组件有path属性，表示路径，对于匹配到该路径的组件有两种写法
           写法1.直接通过component属性来写，注意这个写法不能传props
           写法2.通过render函数来写{推荐写法}
         */}
         {/* 写法1.component 属性的写法，不推荐,传参数不好传 */}
         {/* <Route path='/index' component={Index} /> */}
         {/* 写法2.render 函数的形式，传一个回调函数,推荐使用 */}
         <Route path='/Index' render={()=><Index name='我是传进来的属性'/>}/>
         <Route path='/Product' render={()=><Product/>} />
      </div>
      </Router>
    )
  }
}
export default App