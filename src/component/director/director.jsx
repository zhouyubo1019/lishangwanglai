import React,{Component} from 'react'
import './director.css'
import {NavLink} from 'react-router-dom'
import Heads from '../heads/heads'
import Fel from '../fel/fel'
import Mul from '../mul/mul'

export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
			<div>
				<Heads zou="待参加" y="已参加"></Heads>
				<Fel></Fel>
				<Mul cj="待参加"></Mul>
				<Mul cj="已参加"></Mul>
				<Mul cj="已参加"></Mul>
				<Mul cj="待参加"></Mul>
			</div>
    )
}
}
