import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './moban.css'
import Zujian from '../zujian/zujian'
import Wanc from '../wanc/wanc'
import Danxu from '../danxu/dnaxu'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id="sz">
				<NavLink to="/hunyan">
					<div id="sz-img"><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=33322991ede4fde3424b1dc4dc59c0daeffe02755274fee6b5bd9b4a11eb5627" /></div>
				</NavLink>
				<p>选择婚柬模板</p>
			</div>
				<Danxu></Danxu>
				<Danxu></Danxu>
				<Danxu></Danxu>
				<Danxu></Danxu>
				<Danxu></Danxu>
				<Danxu></Danxu>
			<NavLink to="fenx">
				<Wanc a="完成"></Wanc>
			</NavLink>
		</div>
    )
}
}
