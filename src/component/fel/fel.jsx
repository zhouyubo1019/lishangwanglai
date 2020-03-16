import React,{Component} from 'react'
import './fel.css'
import {NavLink} from 'react-router-dom'

export default class about extends Component{
constructor(){
    super()
	this.state={
		optlist:[	{name:'全部'},
					{name:'结婚收礼'},
					{name:'搬家收礼'},
					{name:'诞辰收礼'}, 
					{name:'满月收礼'},	
					{name:'寿宴收礼'},	
					{name:'升学收礼'},	 
					{name:'白事收礼'}
				],
		fletime:[
			{name:'开始时间'},
			{name:'结束时间'}
		],
		timecui:[
			{nian:'2016年',yue:'5月',ri:'27日'},
			{nian:'2016年',yue:'5月',ri:'28日'},
			{nian:'2016年',yue:'5月',ri:'29日'}
		],
		timedui:[
			{nian:'2016年',yue:'6月',ri:'23日'},
			{nian:'2016年',yue:'6月',ri:'24日'},
			{nian:'2016年',yue:'6月',ri:'25日'}
		],
		display_lb: 'none',
		display_sj: 'none', 
	}
}
ctap(ev){	
	if(ev.target){
		console.log(ev.target)
	}
}
display_lb() {
        if (this.state.display_lb == 'none') {
            this.setState({
                display_lb: 'block',
            })
        }
        else if (this.state.display_lb == 'block') {
            this.setState({
                display_lb: 'none',
            })
 
        }
    }
display_sj() {
        if (this.state.display_sj == 'none') {
            this.setState({
                display_sj: 'block',
            })
        }
        else if (this.state.display_sj == 'block') {
            this.setState({
                display_sj: 'none',
            })
 
        }
    }
render(){
    return(
			<div id="fel-boss">
				<div id="fel">
					<div id="fel-item" onClick={this.display_lb.bind(this)}>类别</div>
					<div id="fel-item" onClick={this.display_sj.bind(this)}>时间</div>
				</div>
				<div id="leib" style={{display: this.state.display_lb}}>
					{this.state.optlist.map((item,Index)=>{
						return(
								<div id="leib-item" key={Index}>{item.name}</div>
						)
					})}
					
				</div>
				<div id="time" style={{display: this.state.display_sj}}>
					{this.state.fletime.map((item,index)=>{
						return (
							<div id="time-item" key={index}>{item.name}</div>
						)
					})
					}
					<div id="time-left">
						{this.state.timecui.map((item,index)=>{
							return(
								<div>
									<p id="time-a">{item.nian}</p>
									<p id="time-a">{item.yue}</p>
									<p id="time-a">{item.ri}</p>
								</div>
							)
						})}
					</div>
					<div id="time-left" style={{borderRight:'none'}}>
						{this.state.timedui.map((item,index)=>{
							return(
								<div>
									<p id="time-a">{item.nian}</p>
									<p id="time-a">{item.yue}</p>
									<p id="time-a">{item.ri}</p>
								</div>
							)
						})}
					</div>
					<div id="fel-qd" onClick={this.display_sj.bind(this)}>确定</div>
				</div>
			</div>
    )
}
}
