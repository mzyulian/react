import React from 'react';
const Notfound=(props)=><div>未找到资源,点击返回<button onClick={()=>props.history.push('/')}>回到首页</button></div>
export default Notfound