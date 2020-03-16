import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import Home from '../component/home/Home'
import Director from '../component/director/director'
import Manage from '../component/Manage/Manage '
import About from '../component/about/about'
import SZ from '../component/about/sz/sz'
import GY from '../component/about/gy/gy'
import FX from '../component/about/fx/fx'
import FK from '../component/about/fk/fk'
import BJ from '../component/about/bj/bj'
import MC from '../component/about/mc/mc'
import Olist from '../component/homelist/homeolist/homeolist'
import Songli from '../component/songli/songli'
import Huny from '../component/hunyan/hunyan'
import Moban from '../component/moban/moban'
import Fenx from '../component/fenx/fenx'
import Ccc from '../component/ccc/ccc'
import Index from './index.css'
function router() { 
    return(
        <div id="box">
            <Header></Header>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/manage' component={Manage}/>
                <Route path='/director' component={Director}/>
                <Route path='/about' component={About}/>
				<Route path='/sz' component={SZ}/>
				<Route path='/gy' component={GY}/>
				<Route path='/fx' component={FX}/>
				<Route path='/fk' component={FK}/>
				<Route path='/bj' component={BJ}/>
				<Route path='/mc' component={MC}/>
				<Route path='/homeolist' component={Olist}/>
				<Route path='/songli' component={Songli}/>
				<Route path='/hunyan' component={Huny}/>
				<Route path='/moban' component={Moban}/>
				<Route path='/fenx' component={Fenx}/>
				<Route path='/ccc' component={Ccc}/>
                <Route component={Home}/>
            </Switch>
			
        </div>
    )
 }

  export default router