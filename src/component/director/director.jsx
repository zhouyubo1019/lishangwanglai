import React,{Component} from 'react'
import './director.css'
export default class director extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id="dir-head">
				<div id="dir-jiao">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=7444ec571265c2627df0912bb4d785d0c6648a8262ae9415a94f11c814c6a41d" />
				</div>
				<div id="dir-center">待参加</div>
				<div id="dir-cented">已参加</div>
				<div id="dir-jia">
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=d3c1d0fd6ceb5ff2788454d3d5d616146cc8a25a7427883e83d77f215044f00a" />
				</div>
			</div>
			<div>
				<div id="dir-wei">类别
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u499.png?token=a6121849d5b913404652d9935cdcd8b94343887a029e9e6a24d00017a832b830" />
				</div>
				<div id="dir-shi">时间
					<img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼事列表/u499.png?token=a6121849d5b913404652d9935cdcd8b94343887a029e9e6a24d00017a832b830" />
				</div>
			</div>
		</div>
    )
}
}
