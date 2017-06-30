var banner = document.getElementById('banner');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var ul = banner.children[0].children[0];
var target = 0;
var leader = 0;
	banner.onmouseover = function(){
	 	leftBtn.style.display = 'block';
	 	rightBtn.style.display = 'block';
	}
	banner.onmouseout = function(){
		leftBtn.style.display = 'none';
		rightBtn.style.display = 'none';
	}
	leftBtn.onclick = function(){
		target -= banner.offsetWidth;
		if(target <= 0){
			target = 0
		}
	}
	rightBtn.onclick = function(){
		target += banner.offsetWidth;
		if(target > banner.offsetWidth * 4){
			target = banner.offsetWidth * 4;
		}
	}
	setInterval(function(){
		leader = leader+(target-leader)/10;
		ul.style.left = leader +'px';
	},100)
 
 
