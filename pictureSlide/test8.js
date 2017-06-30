/***
* SlideImage类
* @param {Object} config
*/
function SlideImage(config){
	var me = this;
	me.left = 0;
	me.ct = document.getElementById(config.container);
	//窗口css设置
	me.ct.style.cssText = "position:relative;width:" +config.width + "px;height:" + config.height + "px;" +"overflow:hidden";
	me.innerct = document.createElement("div");
	me.innerct.style.cssText = "width:" + config.width*config.imgs.length + "px;height:" +config.height + "px;position:absolute;transition:all 2s linear";
	for(var i=0,len=config.imgs.length;i<len;i++){
		var img = new Image();
		img.src = config.imgs[i];
		img.style.cssText = "width:" + config.width + 'px;' +'height:' + config.height + 'px;float:left';
		me.innerct.appendChild(img);
	}
	me.ct.appendChild(me.innerct);
}

SlideImage.prototype.moveleft = function(){
	var me = this;
	me.left -= 500;
	me.innerct.style.transform='translate('+ me.left +'px,0px)';
}

SlideImage.prototype.moveright = function(){
	var me = this;
	me.left += 500;
	me.innerct.style.transform='translate('+ me.left +'px,0px)';
}
