import React, {Component} from 'react';


class Home extends Component{


    constructor(){
        super();

        // 定义数据
        this.state={
            name:"张三",
            age:30,
            userInfo:{
                userName: "nicai"
            }
        }
    }

    render(){
        return (
            <div>
                <h2>你好，苗梁</h2>
                <h3>react组件里面的所有节点需要被根节点包含</h3>
                <p>I'm a <code>p</code> label</p>
                <p>姓名：{this.state.name}</p>
                <p>年龄：{this.state.age}</p>
                <p>对象：{this.state.userInfo.userName}</p>
            </div>
        )
    }
}

export default Home;
