//文章详情
import React, { Component } from 'react';
class Productdetal extends Component{
    componentWillMount(props){
      console.log('请求数据')
    }
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>我是文章详情页,接收的文章id为{this.props.match.params.id},我会根据这个id去请求数据</div>
        )
    }
}
export default Productdetal 