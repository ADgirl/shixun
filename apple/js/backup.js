window.onscroll=function(){
	var backup = document.getElementById('backup');
	if(window.scrollY > document.documentElement.clientHeight){
		backup.style.display = 'block';
	}else{
		backup.style.display = 'none';
	}
}
