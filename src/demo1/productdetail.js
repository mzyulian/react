//沸点文章详情页 class创建组件的形式
import React, { Component } from 'react';
class Productdetail extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentWillMount(){
        fetch('http://localhost:3000/employee/employeeLogout').then(res=>res.json()).then(myjson=>console.log(myjson))
    }
    //render 函数编写dom
    render(){
        return(
            <div>这是沸点文章详情页,接收的页面的参数为{this.props.match.params.id}，我会根据这个id：{this.props.match.params.id}去请求数据</div>
        )
    }
}
export default Productdetail

