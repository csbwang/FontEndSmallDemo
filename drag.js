function getX(event){
	event=event || window.event;
	return event.clientX || window.pageXOffset;
}

function getY(event){
	event=event || window.event;
	return event.clientY || window.pageYOffset;
}

//拖曳写在onload函数里
window.onload=drag;

function drag(){
	var oDrag=document.getElementById('circle');
	//拖曳
	oDrag.onmousedown=fnDown;
}

function fnDown(event){
	event=event || window.event;
	var oDrag=document.getElementById('circle'),
	// 光标按下时光标和面板之间的距离
	disX=getX(event)-oDrag.offsetLeft,
	disY=getY(event)-oDrag.offsetTop;
	//移动
	document.onmousemove=function(event){
		event=event || window.event;
		fnMove(event,disX,disY);
	}
	// 释放鼠标
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}

function fnMove(event,disX,disY){
	event=event || window.event;
	var oDrag=document.getElementById('circle'),
	l= getX(event)-disX,
	t=getY(event)-disY,
	winW=document.documentElement.clientWidth || document.body.clientWidth,
	winH=document.documentElement.clientHeight || document.body.clientHeight,
	maxW=winW-oDrag.offsetWidth,
	maxH=winH-oDrag.offsetHeight;
	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW;
	}
	if(t<60){
		t=60;
	}else if(t>maxH)
	{
		t=maxH;
	}
	oDrag.style.left=l+'px';
	oDrag.style.top=t+'px';
}