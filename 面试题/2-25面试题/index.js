// 1   es6有哪些新特性?
	const和let
	模板字符串
	箭头函数
	for  of  for  in
	es6中的类
// 2   清除浮动的几种方法?(至少写3种)
		在最后一个浮动标签后,新加一个标签,给其设置clear:both;
		给父元素加overflow:hidden,
		使用after伪元素清除浮动
// 3   CSS3有哪些新特性?(至少写出3种)
		css3的选择器
		@Font-face特性
		圆角
		阴影
		css弹性盒子模型
// 4   vue-router有哪几种导航钩子?
		全局导航钩子
		单独路由独享钩子
		组件内的钩子
// 5   javascript字符串操作函数有哪些?(至少写出3种)
		字符串转换
		字符串分割
		获取字符串长度
		字符串替换
// 6   什么是跨域,如何实现跨域访问(至少写三种)
		当一个请求url的协议,域名,端口三者之间任意一个与当前页面url不同即为跨域
		基于iframe实现跨域
		基于script标签实现跨域
		后台代理方式
// 7   请简述Vue的双向数据绑定原理是什么?
		主要是通过object对象的defineProperty属性,重新写data的set和get函数来实现的
// 8   闭包的3特性?
		函数嵌套函数
		内部函数使用外部函数的参数和变量
		参数和变量不会被垃圾回收机制回收
// 9   var numbers=[1,2,3,4];将numbers转换成'-'连起来的字符串
		var numbers=[1,2,3,4];
		numbers.join('-')
// 10  请详细说下你对vue生命周期的理解?
		总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。
		
		创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和**数据对象**data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。
		
		载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。
		
		更新前/后：当data变化时，会触发beforeUpdate和updated方法。
		
		销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在
// 11  请说下vue组件间的传值?
       父传子
	   子传父
	   同级组件之间的传值
// 12  浏览器本地存储有哪几种,区别是什么?
		cookie 缺点在请求头上戴这数据,导致流量增加,大小限制   4k
		localStorage 以键值对的方式存储,永久存储,永不失效,除非手动删除 5m
		sessionStorage sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存