import React,{Component} from 'react'
import './manage.css'
import Heads from '../heads/heads'
import {NavLink} from 'react-router-dom'
import Threes from '../threes/threes'
import Sol from '../sol/sol'
export default class Manage extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
        	<Heads zou="收礼" y="送礼"></Heads>
        	<Threes></Threes>
			<Sol shou="收" jine="15000"></Sol>
			<Sol shou="收" jine="10000"></Sol>
			<Sol shou="收" jine="10000"></Sol>
			<Sol shou="送" jine="10001220"></Sol>
			<Sol shou="收" jine="10000"></Sol>
        </div>
    )
}
}
