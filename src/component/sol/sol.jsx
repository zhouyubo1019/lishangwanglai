import React,{Component} from 'react'
import './sol.css'
import {NavLink} from 'react-router-dom'

export default class about extends Component{
constructor(){
    super()
}
taba(){
console.log(this.props.shou)
}
bata(){
console.log(this.props.jine)
}
render(){
    return(
			<div id="sol">
				<p id="sol-p">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" />
					类目名称
					<p>
						<span id="sol-span">{this.props.shou}</span>
						姓名
					</p>
				</p>
				<p id="sol-jine">
					{this.props.jine}
					<p id="sol-timme">
						10人送礼
						2016.8.21
					</p>
				</p>
			</div>
    )
}
}
