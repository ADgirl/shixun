	window.alert("这好似一个警告框！");
	window.prompt("这是一个提示输入弹框。");
	var confirmValue = window.confirm("这是一个确认弹框，返回true or false,确认退出吗？");
	if(confirmValue){
		window.close()
	}else{
		window.open("https://www.jingdong.com");
	}
	var age = window.prompt("请输入你的出生日期：");
	var year = age.substr(0,4);
	age = new Date().getFullYear() - year;
	window.confirm("哇！你已经" + age + "岁了^_^");
	
	
	
	var i = 1;
	function myFun(){
		window.open('http://www.baidu.com',"",'width；200px,height=200px');
		var timer = setTimeout('myFun()',1000);
		i++;
		if(i == 20){
			clearTimeout(timer);
		}
	}
	
	
	var week = window.prompt("今天周几?");
	switch (week){
		case '星期一':
			window.confirm("今天是星期一！");
			break;
			case '星期二':
			window.confirm("今天是星期二！");
			break;
			case '星期三':
			window.confirm("今天是星期三！");
			break;
			case '星期四':
			window.confirm("今天是星期四！");
			break;
			case '星期五':
			window.confirm("今天是星期五！");
			break;
			case '星期六':
			window.confirm("今天是星期六！");
			break;
			case '星期日':
			window.confirm("今天是星期日！");
			break;
		default:
			break;
	}
	
