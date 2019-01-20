/* react 路由跳转 */
import React, { Component } from 'react'
import './App.css'
//引入组件
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom'
//引入首页组件
import Index from './demo/index.js'
//沸点组件
import Product from './demo/product.js'
//沸点文章详情页
import Productdetal from './demo/productdetail.js'
//未找到路由配置
import Notfound from './demo/notfound.js'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      /* 定义沸点列表的数据 */
      productdata:[
        {id:1,title:'react学习'},
        {id:2,title:'node学习'},
        {id:3,title:'ng学习'},
        {id:4,title:'vue学习'}
      ]
    }
  }
  render(){
    return (
        <Router>
      <div>
      {/* 一个根节点 */}
        <ul style={{'overflow':'hidden'}}>
          <li className='mylist'><Link to='/'>首页</Link></li>
          <li className='mylist'><Link to='/product'>沸点</Link></li>
          <li className='mylist'><Link to='/happy'>活动</Link></li>
        </ul>
        {/* 首页 */}
        <Switch>
         <Route exact path='/' render={()=><Index/>}/>
         {/* 沸点 */}
         <Route path='/product' exact render={()=><Product data={this.state.productdata}/>}/>
         {/* 沸点详情页对应跳转 */}
         <Route path='/product/:id' render={(props)=><Productdetal {...props}/>}/>
         {/* 活动页 */}
         <Route path='/happy' render={()=><div>这是活动页</div>}/>
         {/* 未匹配到路由 */}
         <Route render={(props)=><Notfound {...props}/>}/>
         </Switch>
      </div>
        </Router>
    )
  }
}
export default App
