//沸点组件列表
import React, { Component } from 'react';
//引入Link 组件，列表页跳转到详情页
import {Link} from 'react-router-dom'
class Product extends Component{
    constructor(props){
      super(props)
      this.state={}
    }
    render(){
       return (
           this.props.data.map((item)=>{
               return (
                   <h3 key={item.id}><Link to={`/product/${item.id}`}>{item.title}</Link></h3>
               )
           })
       )
    }
}
export default Product