import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './danxu.css'
export default class Home extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id="moban">
				<div id="moban-b">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/选择模板/u732.svg?token=bb24cdc4ad4b49db70535bcdf9637c2b399258537511dfd746c7bd1e85643f42" />预览
				</div>
				<label id="moban-lbel"><input type="radio" name="sex" value="模板名称" />模板名称</label>
			</div>
		</div>
    )
}
}