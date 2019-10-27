var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mdX,mdY,mvX,mvY; // mouse coordinates
var started = false;

let click = e =>{
	if(!started){
			mdX = e.pageX-10;
			mdY = e.pageY-10;
			started = true;
			ctx.beginPath();
		}
};
let move = e =>{
	if(started){
		mvX = e.pageX-mdX-10;
		mvY = e.pageY-mdY-10;
		ctx.beginPath();
		ctx.rect(mdX, mdY, mvX, mvY);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.stroke();
	}
};

document.addEventListener("mousedown",click);
document.addEventListener("mousemove",move);
document.addEventListener("mouseup", () =>{
	started = false;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	X = (mdX+mvX);
	Y = (mdY+mvY);
	document.getElementById("bounds").innerHTML = "X:"+Math.min(mdX,X)+", "+Math.max(mdX,X)+" Y:"+Math.min(mdY,Y)+", "+Math.max(mdY,Y);
});