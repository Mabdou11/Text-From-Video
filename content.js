const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function coldStart(){
	//pre execute tesseract on a small blank image:
		var blank10x10 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
		Tesseract.recognize(blank10x10).progress((progress)=>{console.log("init Tesseract")}).then(()=>{console.log("init Complete")});
	}

$(document).ready(function(){
	// instant.page == preload a page faster.
//	$('body').append('<script src="//instant.page/2.0.1" type="module" defer integrity="sha384-4Duao6N1ACKAViTLji8I/8e8H5Po/i/04h4rS5f9fQD6bXBBZhqv5am3/Bf/xalr"></script>');

if($("video").position()){
// for now, it does not work with non <video> elements	
	coldStart();

	$(document).on("keydown",function(kevent){
	if (kevent.altKey && kevent.ctrlKey ) {
	//	$(document).on('click','video', function(){
		'use strict';
		(function(window, document) {
 			//was a blank div for mouse move result
			$('body').append('<div id="result" style=" font-family:\'Roboto\', sans-serif; z-index:-1; position:absolute; background-color:#eee; border-color: #333; border-radius:10px 10px 10px 10px; transition:transform 0.3s cubic-bezier(.02,1.23,.79,1.08);">Doing Stuff, please wait till this disappears<br>this will become a notification or something</div>');			

		    let canvas = document.createElement('canvas');
		    var video = document.querySelector('video');
		    var X = 0;
		    var Y = 0;
		    var W = parseInt(video.videoWidth);
		    var H = parseInt(video.videoHeight);

		    if(bound().W){
		    	X = bound().X;
		    	Y = bound().Y;
		    	W = bound().W;
		    	H = bound().H;
		    }

		    canvas.width = parseInt(W);
		    canvas.height = parseInt(H);
		    var ctx = canvas.getContext('2d');
		    ctx.drawImage(video, X, Y, W, H, 0, 0, canvas.width, canvas.height);
		    var base64ImageData = canvas.toDataURL('image/png');


			Tesseract.recognize(base64ImageData).progress((progress)=>{
				
		 		if(progress.status != 'recognizing text'){
		 		
		 			// show progress on mouse cursor
		 		$(document).on('mousemove', function(e){			
		 			$("#result").css({
 					left: (e.pageX+20)+'px',
 					top : (e.pageY+5)+'px',
 					'z-index': '999'
		 			});
		 		});
				
		 		$('#result').text('Launching Tesseract...');
		 		}else{

		 		if(progress.progress<0.8){
					$('#result').text('Recognizing, please wait');
				}else{
					if(progress.progress<1){
						$('#result').text('Almost done...')
						}else $('#result').text('There you go!');
					}
				}

		 	}).then((result)=>{
		 		$('body').children('#result').text(result.text);
		 		copyToClipboard(result.text);
		 	//	$('#result').append('<img src="'+base64ImageData+'"/>');

		 		setTimeout(function(){
		 		$('#result').remove();
		 		},2000);
		 	
		 	});	

		})(window, document);
	//	});
	}
	});
}else{
	// did not fix the problem
	// todo: canvas should not 
	if(!$("#selectionCanvas").length){
		$("#selectionCanvas").remove();
	}
}
});

