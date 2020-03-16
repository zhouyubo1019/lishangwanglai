import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './homelist.css'
export default class Home extends Component{
constructor(){
    super()
	
}
render(){
	
    return(
       <div id="home-bottom">
       		<div id="home-bottom1">
       			<span>排行</span>
       			<span>用户</span>
       			<span>历史盈亏</span>
       			<span>本月盈亏</span>
       			<NavLink to="/homeolist">
					<span style={{marginRight:'0px',fontWeight:'500',color:'#333'}}>更多</span>
				</NavLink>
       			
       		</div>
       		<div id="home-bottom2">
       			<span>1</span>
       			<span>刘JAVSS</span>
       			<span>95685.00</span>
       			<span>4500.00</span>
       		</div>
       		<div id="home-bottom2">
       			<span>1</span>
       			<span>刘JAVSS</span>
       			<span>95685.00</span>
       			<span>4500.00</span>
       		</div>
       		<div id="home-bottom2">
       			<span>1</span>
       			<span>刘JAVSS</span>
       			<span>95685.00</span>
       			<span>4500.00</span>
       		</div>
       		<div id="home-bottom2">
       			<span>1</span>
       			<span>刘JAVSS</span>
       			<span>95685.00</span>
       			<span>4500.00</span>
       		</div>
       		<div id="home-bottom2">
       			<span>1</span>
       			<span>刘JAVSS</span>
       			<span>95685.00</span>
       			<span>4500.00</span>
       		</div>
       	</div>
    )
}
}