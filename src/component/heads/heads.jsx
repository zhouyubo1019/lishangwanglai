import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import './heads.css'
export default class Manage extends Component{
constructor(){
    super()
    this.state={
    	info:true
	}

}
fanhui(){
console.log(1)
    window.history.go(-1)
}
tab(){
console.log(this.props.zou)
	this.setState({
	info:true
})
}
tab1(){
console.log(this.props.y)
    this.setState({
    info:false
})
}
render(){
    return(
        <div className="big">
        	<div className="l-header">
        		<div className="ret">
        			<img onClick={this.fanhui.bind(this)} src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=ff14f5b935ac8f26062b70423e3cb04b0b48431c30ba266bdf3e352e1993d7e2" alt="" />
        		</div>
        		<div className="nav">
        			<p onClick={this.tab.bind(this)} style={{ color: this.state.info==true ? '#fff' : '', backgroundColor: this.state.info == true ? '#199ED8' : '' }}>{this.props.zou}</p>
        			<div onClick={this.tab1.bind(this)} style={{ color: this.state.info==false ? '#fff' : '', backgroundColor: this.state.info == false ? '#199ED8' : '' }}>{this.props.y}</div>
        		</div>
        		<div className="jia">
                    <NavLink to="/ccc">
        			<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=fe9fb97c4e04137da23a4c642d6e6761a2b86dc595a3e4cd1dbd530da68be456" alt=""/ >
                    </NavLink>
        		</div>
        	</div>
        </div>
    )
}
}
