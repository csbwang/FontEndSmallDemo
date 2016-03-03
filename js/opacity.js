window.onload=function(){
	var divs=document.getElementsByClassName('grid');
	for(var i=0;i<divs.length;i++){
		divs[i].timer=null;
		divs[i].opacity=30;
		divs[i].onmouseover=function(){
			changeOpacity(this, 100);
		}
		divs[i].onmouseout=function(){
			changeOpacity(this, 30);
		}
	}
}

function changeOpacity(obj, target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=(target-obj.opacity)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(obj.opacity==target){
			clearInterval(obj.timer);
		}else{
			obj.opacity+=speed;
			obj.style.opacity=(obj.opacity)/100;
			obj.style.filter='alpha(opacity:'+this.opacity+')';
		}
	},30);
}