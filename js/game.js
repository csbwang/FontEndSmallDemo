var gifts=[
"iphone6s",
"ipad air2",
"三星s6",
"小米手机4",
"魅族mx5",
"500元充值卡",
"200元超市购物卡",
"32G优盘"
],
timer,
flag=0;

window.onload=function(){
	start = document.getElementById("start"),
	end = document.getElementById("end"),
	gift = document.getElementById("gift")
	// 鼠标点击事件
	start.onclick=startGame;
	end.onclick=endGame;

	// 键盘事件
	document.onkeyup=function(event){
		event=event || window.event;
		if(event.keyCode==13){
			if(flag==0){
				startGame();
				flag=1;
			}else{
				endGame();
				flag=0;
			}
		}
	}

	function startGame(){
		clearInterval(timer);
		flag=1;
		timer=setInterval(function(){
		var num=Math.floor((Math.random()*8));
		gift.innerHTML=gifts[num];
		},50);
		start.style.background="#ccc";
		end.style.background="#F60";
	}

	function endGame(){
		flag=0;
		clearInterval(timer);
		start.style.background="#F60";
		end.style.background="#ccc";
	}
}
