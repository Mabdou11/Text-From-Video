
var canvas = document.createElement("canvas");
canvas.setAttribute("id", "myCanvas");


$(document).ready(function(){

});

document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var mdX,mdY,mvX,mvY; // mouse coordinates
var started = false;
var scale;

function bound(){

	var x = (mdX+mvX);
	var y = (mdY+mvY);
	return{
		X:scale()*Math.min(mdX,x),
		Y:scale()*Math.min(mdY,y),
		W:scale()*(Math.max(mdX,x)-Math.min(mdX,x)),
		H:scale()*(Math.max(mdY,y)-Math.min(mdY,y))
	};
}


$(document).ready(function(){
	function pos(){
		if($("video").position(){
			return {
				top:$("video").position().top,
				left:$("video").position().left,
				right:$("video").position().right
			}	
		}else{
			return {
				top:-9999,
				left:-9999,
				right:-99999
			}
		}
	}

	var video = document.querySelector('video');
	var height = $("video").height();
	var width = $("video").width();

	scale = ()=> {
		return video.videoHeight/$("video").height();
	}

	$("#myCanvas").css({
		position: 'absolute',
		'z-index': -1,
		top: pos().top+'px',
		left: pos().left+'px',
	});
	$("#myCanvas").attr("height", height);
	$("#myCanvas").attr("width", width);


	let click = e =>{
		if(!started){

				mdX = e.pageX - pos().left;
				mdY = e.pageY - pos().top;
				started = true;
				ctx.beginPath();
			}
	};

	let move = e =>{
			if(started){
				$("#myCanvas").css({
					'z-index': 990
				});

				mvX = e.pageX-mdX-pos().left;
				mvY = e.pageY-mdY-pos().top;
				ctx.beginPath();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = "#51E7FF27";
				ctx.fillRect(mdX, mdY, mvX, mvY);
				ctx.strokeStyle = "#51E7FF"
				ctx.lineWidth = 2;
				ctx.rect(mdX, mdY, mvX, mvY);
				ctx.stroke();
//	document.getElementById("bounds").innerHTML = "X:"+bound().X+" --> "+(bound().X+bound().W)+" |  Y:"+bound().Y+" --> "+(bound().Y+bound().H);
			}
		};

	document.addEventListener("mousedown",click);
	document.addEventListener("mousemove",move);
	document.addEventListener("mouseup", () =>{
		$("#myCanvas").css({
			'z-index': -1
		});
		started = false;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});

});
