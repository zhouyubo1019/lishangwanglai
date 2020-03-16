import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './homeolist.css'
import Homelist from '../homelist'
export default class Home extends Component{
constructor(){
    super()
	this.state={
		data:[
			{name:'按盈亏',index:1},
			{name:'按收入',index:2},
			{name:'按支出',index:3}
		],
		background_one: 'rgba(240, 248, 250, 1)',
		background_two: 'rgba(208, 216, 218, 1)'
	}
}
chaneg(){
	 if (this.state.background_one === 'rgba(240, 248, 250, 1)') {
	            this.setState({
	                background_one: 'rgba(208, 216, 218, 1)',
	                background_two: 'rgba(240, 248, 250, 1)'
	            })
	        }
		else if (this.state.background_one === 'rgba(208, 216, 218, 1)') {
			this.setState({
				background_one: 'rgba(240, 248, 250, 1)',
				background_two: 'rgba(208, 216, 218, 1)'
			})
		}
}
render(){
    return(
		<div>
			<div id="olist-top">
				<NavLink to="/">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=1b1c227e72f13080c737db843e5ef1c5d358110ef8e9974e33744e17fb5f7ccf" />
				</NavLink>
				<div id="olist-p">排行榜</div>
			</div>
			<div id="olist-fl">
				{this.state.data.map((item,Index)=>{
					return(
						<div id="olist-for" index="{Index}" onClick={this.chaneg.bind(this)} style={{backgroundColor: this.state.background_one}}>{item.name}</div>
					)
				})}
			</div>
			<Homelist></Homelist>
		</div>
    )
}
}