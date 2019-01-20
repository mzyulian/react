import React, { Component } from 'react'
//类的形式创建一个组件
class Routedemo extends Component{
     //render函数创建组件
     render(){
         return (
             <div>
                 <ul>
                     <li>首页</li>
                     <li>水果</li>
                     <li>蔬菜</li>
                     <li>肉类</li>
                 </ul>
             </div>
         )
     }
}
export default Routedemo