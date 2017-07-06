function hide(){
	var one = document.getElementById('first').style.display = 'none'
	var two = document.getElementById('second').style.display = 'none'
	var three = document.getElementById('third').style.display = 'none'
	var four = document.getElementById('forth').style.display = 'none'
	var five = document.getElementById('fifth').style.display = 'none'	
}
function show(obj){
	hide();
	switch (obj){
		case 'one':
		var one = document.getElementById('first').style.display = 'block';
			break;
			case 'two':
		var two = document.getElementById('second').style.display = 'block';
			break;
			case 'three':
		var three = document.getElementById('third').style.display = 'block';
			break;
			case 'four':
		var four = document.getElementById('forth').style.display = 'block';
			break;
			case 'five':
		var five = document.getElementById('fifth').style.display = 'block';
			break;
		default:
			break;
	}
}

