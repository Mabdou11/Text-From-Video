if(document.querySelector('video')){
var canvas = document.createElement("canvas");
canvas.setAttribute("id", "myCanvas");

// this right here should be fixed
// for the youtube videos to work properly


document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var mdX,mdY,mvX,mvY; // mouse coordinates
var started = false;
var selected = false;
var scale;

function bound(){
	// returns a scalled values
	var x = (mdX+mvX);
	var y = (mdY+mvY);
	return{
		X:scale()*Math.min(mdX,x),
		Y:scale()*Math.min(mdY,y),
		W:scale()*(Math.max(mdX,x)-Math.min(mdX,x)),
		H:scale()*(Math.max(mdY,y)-Math.min(mdY,y))
	};
}

function getOffset( el ) {
var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { 
    	top: rect.top + scrollTop, left: rect.left + scrollLeft 
    }
}

$(document).ready(function(){


	function pos(){
			var theVid;
			var offset = getOffset(document.querySelector('video'));
			return {
				top:offset.top,
				left:offset.left,
				height:$("video").height(),
				width:$("video").height(),
		}	
	}

	var video = document.querySelector('video');
	var height = $("video").height();
	var width = $("video").width();

	scale = ()=> {
		return video.videoHeight/$("video").height();
	}
function initCanvas(){
	if($('video').position()){
		$("#myCanvas").css({
			position: 'absolute',
			'z-index': -1,
			top: pos().top+'px',
			left: pos().left+'px',
			height:height,
			width: width
		});
		$("#myCanvas").attr("height", height);
		$("#myCanvas").attr("width", width);			
	}
}
		initCanvas();

	let click = e =>{
		if(!started){
				initCanvas();
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
}
