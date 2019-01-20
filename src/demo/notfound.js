//未匹配路由页面,js点击返回
import React from 'react';
const Notfound=(props)=><div>oops,未找到,<button onClick={()=>props.history.push('/')}>回到首页</button></div>
export default Notfound