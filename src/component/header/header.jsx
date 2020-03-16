import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="header">
			<div id="head">
				<p style={{marginLeft:'50px'}}>WIFI</p>
				<p style={{marginLeft:'90px'}}>9:15PM</p>
				<p style={{marginLeft:'120px'}}>82%</p>
			</div>
			
            <div id="u1">
				<li><NavLink to="/">首页</NavLink></li>
				<li><NavLink to="/manage">礼账</NavLink></li>
				<li><NavLink to="/hunyan"><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u19.svg?token=bb6218028dc999bb15327c91dc5c8d9afbd58c3044ffb929c47db23e592af57f"/></NavLink></li>
				<li><NavLink to="/director">礼事</NavLink></li>
				<li><NavLink to="/about">我的</NavLink></li>
			</div>
        </div>
    )
}
}
