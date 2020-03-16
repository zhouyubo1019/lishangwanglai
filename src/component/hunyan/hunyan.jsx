import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './hunyan.css'
import Zujian from '../zujian/zujian'
import Wanc from '../wanc/wanc'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<Zujian header="婚宴制作"></Zujian>
			<div id="inputt">
				新郎姓名
				<input type="text" defaultValue="请输入新郎姓名" />
			</div> 
			<div id="inputt">
				新娘姓名
				<input type="text" defaultValue="请输入新娘姓名" />
			</div> 
			<div id="inputt">
				婚礼日期
				<span>选择婚礼日期</span>
			</div> 
			<div id="inputt">
				入席时间
				<span>选择入席时间</span>
			</div> 
			<div id="inputt">
				婚礼地址
				<input type="text" defaultValue="婚礼地址待定" />
			</div> 
			<NavLink to="moban">
				<Wanc a="下一步"></Wanc>
			</NavLink>
		</div>
    )
}
}

