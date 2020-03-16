import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './wanc.css'
export default class Home extends Component{
constructor(){
    super()
}
a(){
console.log(this.props.a)
}
render(){
    return(
        <div id="wanc">
			{this.props.a}
		</div>
    )
}
}