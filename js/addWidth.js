window.onload=function(){
	var lis=document.getElementsByTagName('li');
	for(var i=0;i<lis.length;i++){
		lis[i].timer=null;
		lis[i].onmouseover=function(){move(this, 400);}
		lis[i].onmouseout=function(){move(this, 200);}
	}
}

function move(obj, target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		// 变速运动，速度随着目标距离的远近而变化
		var speed=(target-obj.offsetWidth)/8;
		// 正负数分别取整，防止单一取整出现0的情况
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		// 注意这里是'=='，因为需要调用变长和回缩两种情况
		if(obj.offsetWidth==target){
			clearInterval(obj.timer);
		}else{
			obj.style.width=obj.offsetWidth+speed+'px';
		}
	},30);
}