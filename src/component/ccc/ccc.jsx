import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './ccc.css'
import Zujian from '../zujian/zujian'
import Wanc from '../wanc/wanc'
export default class Home extends Component{
constructor(){
    super()
}
	
render(){
    return(
        <div>
			<div id="sz">
				<NavLink to="/director">
					<div id="sz-img"><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=33322991ede4fde3424b1dc4dc59c0daeffe02755274fee6b5bd9b4a11eb5627" /></div>
				</NavLink>
				<p>记礼事</p>
			</div>
			<div>
				<p id="ccc">￥ 0.00</p>
				<p id="ccc-b">
					<input type="text" defaultValue="请输入备注信息，最多可输入100字。如“某某孩子满月，需参加并送礼500元”。" />
				</p>
				<p id="ccc-a">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" />
				2016.06.27
				<span>系统将在当前时间前1至2天进行提醒</span>	
				</p>
				<p id="ccc-a">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" />
				选择送礼类型
				</p>
				<p id="ccc-d">
					<span>送</span>
				选择送礼人
				</p>
			</div>
			<NavLink to="/manage">
				<Wanc a="提交"></Wanc>
			</NavLink>
		</div>
    )
}
}