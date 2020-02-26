// 十三、null 和undefined有什么区别?
null是一个表示”无”的对象，转数值是为0，undefined是一个表示”无”的原始值，转为数值时为NaN。当声明的变量还未被初始化时，能量的默认值为undefined
Null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象
Undefined表示”缺少值”,就是此处应该有一个值,但是还没有定义。
// 十四、对象与字符申的互相转换用哪些方法?
$.parseJSON();
JSON.stringify()
JSON.parse()
// 十五、javascript 对象深拷贝有哪些方法?
var clone = function (obj) { 
	return JSON.parse(JSON.stringify(obj));
	 }
	 
	 
	var clone = function (obj) { 
		if(obj === null) return null 
		if(typeof obj !== 'object') return obj;
		if(obj.constructor===Date) return new Date(obj); 
		var newObj = new obj.constructor ();
		for (var key in obj) {
		 if (obj.hasOwnProperty(key)) {
			 var val = obj[key];
			 newObj[key] = typeof val === 'object' ? arguments.callee(val) : val;
		 }
		}  
		return newObj;  
	};
// 十六、Javascript 中==和===区别是什么?
==先转换类型再比较，===先判断类型，如果不是同一类型直接为false。
// 十七、下面这段代码想要循环延时输出结果01234.请向输出结果是否正确，如果不正确说明为什么，并修改循再内的代码使其输出正确的结果，for(var i = 0;i<5;++i){
// setTimeout(function(){
//     console.log(i+'');
// },100*i)
// }
for(let i = 0;i<5;i++){
setTimeout(function(){
    console.log(i+'');
},100*i)
}
// 十八、Javascript实现Ajax的原理(实现过程)是什么?
（未初始化状态）对象已建立或已被abort()方法重置，尚未调用open方法。
（初始化状态）open()方法已经调用，但是send()方法为调用。请求还没有被发送。
（发送数据）send()方法法以调用,HTTP请求已发送到Web服务器。未接收到响应。
（数据传送中）所有响应头部都已经接收到。响应体开始接受但未完成。
（完成加载）HTTP响应已经完全接收。
// 十九、程序题,下面的程序输出结果是什么?
// function doSomething(){
// 	for(var i=0;4>i;i++){
// 		var k=100;
// 		aMrg+=','+(k+i);
// 	}
// }
// var k=1,aMrg=k;
// doSomething();
// aMrg+=k;
// console.log(aMrg);
1,100,101,102,1031
// 二十、用reduce方法将多维数据[1,[1,2[3,4]],[5,6]]扁平化(变一维)
 function fn(a) { 
        return a.reduce((first,item)=>{

            if(Array.isArray(item)){
                return first.concat(fn(item))
            }else{
                return first.concat(item)
            }
        },[])
    }
    const arr = [1,[1,2,[3,4]],[5,6]]
    console.log(fn(arr))