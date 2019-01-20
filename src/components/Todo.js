import React from 'react'

//组件的形式创建一个列表
// export default class Todolist extends Component{
//     //定义一个函数
//     delTodo=(id)=>{
//        console.log(id);
//        //传递到父组件,调用属性，让属性再去调用父组件的方法
//        this.props.delTodomsg(id)
//     }
//     render(){
//       return (
//         /* 展开每一向 */
//         <div>
//           <div>{this.props.text}
//           {/* 绑定行内的样式 */}
//           <span style={{paddingLeft:'44px',color:'red'}} onClick={(id)=>this.delTodo(this.props.id)}>X</span>
//           </div>
//         </div>
//       )
//     }
//   }
//无状态的形式，用函数式的形式创建
const Todolist=(props)=>{
    return (
        <div>
          <div>{props.text}
          {/* 绑定行内的样式 */}
          <span style={{paddingLeft:'44px',color:'red'}} onClick={(id)=>props.delTodomsg(props.id)}>X</span>
          </div>
        </div>
    )
}
export default Todolist