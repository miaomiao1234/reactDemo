import React from 'react';
import '../assets/css/index.css'

/**
 * 绑定属性注意：
 *  class要换成 className,
 *  for 要换成htmlFor
 *  style:
 *      <div style={{"color:'red'}}>行内样式</div>
 *  其他属性和以前写法一样
 */

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            msg:'我是一个组件',
            name:'myName',
            title:'我是标题',
            color:'red',
            style:{
                color:'red',
                fontSize:'40px'
            }
        }

        // 第二种改变this指向的方法
        this.getMessage = this.getMessage.bind(this);

    }

run(){
    alert('我是一个run方法')
}

getData(){
    alert(this.state.msg);
}

getMessage(){
    alert(this.state.msg)
}

// 第三种绑定当前对象方式，箭头函数
getName = () => {
    alert(this.state.name)
}

setData=() =>{
    //改变state的值
    this.setState({
        msg:'hello world'
    })
    console.log(this.state.msg);
}

changeData=(str) =>{
    this.setState({
        msg:str
    })
    console.log(this.state.name)
}

render(){
    return(
        <div>
            <button onClick={this.run}>点我</button>
            <br />
            <br />
            <button onClick={this.getData.bind(this)}>第一种改变this指向的方法</button>
            <br />
            <br />
            <button onClick={this.getMessage}>第二种改变this指向的方法</button>
            <br />
            <br />
            <button onClick={this.getName}>第三种改变this指向的方法</button>
            <br />
            <br />
            <button onClick={this.setData}>改变state的值</button>
            <br />
            <br />
            <button onClick={this.changeData.bind(this,'zhangsan')}>执行方法传值</button>


            <h1 title="222">{this.state.msg}</h1>    
            <br /> 
            <div title={this.state.title}>{this.state.msg}</div>
            <br />
            <div className='red' title={this.state.title}>我是一个红色的div</div>
            <br />
            <div className={this.state.color} title={this.state.title}>我是一个红色的div</div>
            <br />
            <label htmlFor="name">姓名：</label>
            <input id = "name" defaultValue='ml'/>
            <br />
            <br />
            <div style={this.state.style} className={this.state.color} title={this.state.title}>我是一个红色的div 行内样式</div>
        </div>
    );
}

}

export default Home;