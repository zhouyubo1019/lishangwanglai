import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './fenx.css'
import Zujian from '../zujian/zujian'
import Wanc from '../wanc/wanc'
export default class Home extends Component{
constructor(){
    super()
	this.state={
		data:[
			{imga:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u852.svg?token=3ec824cfe9a022bf4162f7142216eceb9f4cd1e8d9a75e94298cbf587139b75c',name:'微信好友',imaa:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=5b42fafacee58f6906814549e21193fbe2350df5ab9bdb7fbc548470f3e6d27d'},
			{imga:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u857.svg?token=1822cace532fb56e398eded3fbdc8983d17a9ab53e203bd7af0e261ef90af546',name:'QQ好友',imaa:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=5b42fafacee58f6906814549e21193fbe2350df5ab9bdb7fbc548470f3e6d27d'},
			{imga:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u862.svg?token=68cb8636582adf7677056d14a9f4f03b4edbfa808c56917d63528df7a6b93468',name:'微信朋友圈',imaa:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=5b42fafacee58f6906814549e21193fbe2350df5ab9bdb7fbc548470f3e6d27d'},
			{imga:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u867.svg?token=fa05298cea03fcd7eb7b1c69ed82227f68286e644461dbe8dfd742c6f87a5dc1',name:'通讯录好友',imaa:'http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/婚柬分享/u851.png?token=5b42fafacee58f6906814549e21193fbe2350df5ab9bdb7fbc548470f3e6d27d'}
		],
	}
}
render(){
    return(
        <div>
			<div id="sz">
				<NavLink to="/moban">
					<div id="sz-img"><img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=33322991ede4fde3424b1dc4dc59c0daeffe02755274fee6b5bd9b4a11eb5627" /></div>
				</NavLink>
				<p>婚柬分享</p>
			</div>
			
			<div id="fenx">
				<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=817ee4fc48887071adaf411dc2ed55dc011f73054ad5716876b5176401fb1872" />
			</div>
			<div id="fenx-t">
				{this.state.data.map((item,index)=>{
					return(
						<div id="fenx-l">
							<img src="{item.imga}" />
							<span>{item.name}</span>
							<img id="fenximg-t" src="{item.imaa}" />
						</div>
					)
				})}
			</div>
		</div>
    )
}
}