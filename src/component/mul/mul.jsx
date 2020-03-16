import React,{Component} from 'react'
import './mul.css'
import {NavLink} from 'react-router-dom'

export default class about extends Component{
constructor(){
    super()
}
taba(){
console.log(this.props.cj)
}
render(){
    return(
			<div id="mul">
				<p id="mul-title">王大锤搬家请客
					<p id="mul-item">
						<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u478.svg?token=34d4a7033a387aa355099f1e0806e64b5f6abf2b2bc3ea18b0079a94618e85f0" />地点名称地点名称
					</p>
				</p>
				<p id="mul-time">
					{this.props.cj}
					<p id="mul-timme">2016.8.21</p>
				</p>
			</div>
    )
}
}
