import React, { Component } from 'react';
import './App.css'
//引入router 组件
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
//引入首页组件
import Index from './demo1/index.js'
//引入沸点组件
import Product from './demo1/product.js'
//引入沸点详情页
import Productdetail from './demo1/productdetail.js'
//引入未找到路由组件
import Notfound from './demo1/notfound.js'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[
        {id:1,title:'reacr学习'},
        {id:2,title:'vue学习'},
        {id:3,title:'ng学习'},
        {id:4,title:'node学习'}
      ]
    }
    //render 函数创建头部tab栏
  }
   render(){
     return(
       /* Router 包裹标签，注意根节点 */
       <Router>
       <div>
         <ul style={{'overflow':'hidden'}}>
           {/* Link设置跳转路径 */}
           <li className='mylist'><Link to='/'>首页</Link></li>
           <li className='mylist'><Link to='/product'>沸点</Link></li>
           <li className='mylist'><Link to='/happy'>活动</Link></li>
         </ul>
         {/* 设置路由跳转匹配组件 */}
         {/* 设置switch 匹配 */}
         <Switch>
         <Route exact path="/" render={()=><Index/>}/>
         {/* 设置精确匹配 */}
         <Route  exact path="/product" render={(props)=><Product data={this.state.data}/>}/>
         {/* 设置列表跳转到详情的路由规则 */}
         <Route exact path='/product/:id' render={(props)=><Productdetail {...props}/>}/>
         <Route path="/happy" render={()=><div>我是活动页面</div>}/>
         {/* 设置路由未匹配的状态 */}
         <Route render={(props)=><Notfound {...props} />}/>
         </Switch>
       </div>
       </Router>
     )
   }
}
export default App