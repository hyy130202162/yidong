var nav = document.querySelector(".nav");
var pic = document.querySelectorAll(".nav img");
var dot = document.querySelectorAll(".dot");
var index = 0;
var len = pic.length;
hide(0);
function hide(a){
	for(var i = 0;i<len;i++){	
		pic[i].style.display = "none";
		dot[i].style.background = "white";
	}
	pic[a].style.display = "block";
	dot[a].style.background = "black";
}
time()
function time(){
	setInterval(function(){
		index++;
		if(index>=len){
			index = 0;
		}
		hide(index)
	},1000)
}


	