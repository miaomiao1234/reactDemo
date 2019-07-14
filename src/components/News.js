import React from 'react';
import '../assets/css/index.css'
// import logo from '../assets/image/logo.svg'

class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'新闻',
            list:['111','222','333'],
            list2:[<h2 key='1'>我是一个h2</h2>,<h3 key='2'>我是一个h3</h3>],
            list3:[
                {obj:'遍历对象1'},
                {obj:'遍历对象2'},
                {obj:'遍历对象3'},
                {obj:'遍历对象4'},
            ]
        }
    }
render(){

    let listResult=this.state.list.map(function(value,key){
        return (
            <li style={{"color":'red'}} key={key}>{value}</li>
        )
    })

    return(
        <div className="div" >
            {/* <img src={logo} alt="图标"/> */}
            {/* <img src={require('../assets/image/logo.svg')} alt="图标" /> */}
            <img src="http://t1.ituba.cc/mm8/tupai/20150909/5880.gif" alt="网络图片"/>
            <br />
            <br />
            {this.state.msg}
            {this.state.list2}
            <ul>
                {listResult}
            </ul>
            <ul>
                {this.state.list3.map(function(value,key){
                    return(
                        <li key={key}>{value.obj}</li>
                        )
                    })}
            </ul>
        </div>
    )
}
}

export default News;