import React,{Component} from 'react'
import './mc.css'
import {NavLink} from 'react-router-dom'

export default class about extends Component{
constructor(){
    super()
	this.state={
		data:[
			{ title: "昵称", info: "调用第三方昵称", icon: "../../img/u851.png" },
			{ title: "性别", info: "男", icon: "../../img/u851.png" },
			{ title: "生日", info: "1990-01-01", icon: "../../img/u851.png" },
			{ title: "所在地", info: "重庆 南岸区", icon: "../../img/u851.png" }
		],
		second: [
		        { title: "用户ID", info: "16000015" },
		        { title: "注册时间", info: "2016-08-20" }
		]
	}
}
render(){
    return(
		<div id='mc'>
			<div id="mc-top">
				<NavLink to="/about">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=1b1c227e72f13080c737db843e5ef1c5d358110ef8e9974e33744e17fb5f7ccf" />
				</NavLink>
				<div id="mc-p">个人资料</div>
			</div>
			<div id="mc-header">
				<p>头像</p>
				<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=6c12ad32313933eaf89c593f88a67ba1252f1dc53454ed1c4fd7bf134408d649" />
			</div>
			<div>
				{this.state.data.map((item,index)=>{
					return(
						<div id='mc-for'>
							<p id="mc-title">{item.title}</p>
							<p id="mc-info">{item.info}<img src='{{item.icon}}'></img></p>
						</div>
					)
				})}
			</div>
			<div id="mc-ccc">
				{this.state.second.map((item,index)=>{
					return(
						<div id='mc-for'>
							<p id="mc-title">{item.title}</p>
							<p id="mc-info">{item.info}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
}
