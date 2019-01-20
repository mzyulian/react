import React, { Component } from 'react';
//沸点页再跳到详情页面
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