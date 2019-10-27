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
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
document.addEventListener("keydown", function(evt){
			'use strict';
	if(evt.altKey && evt.shitfKey){
		$(document).ready(function(){
			alert("yohoho!");
		});
	}
});
});

$(document).ready(function(){
	// instant.page == preload a page faster.
//	$('body').append('<script src="//instant.page/2.0.1" type="module" defer integrity="sha384-4Duao6N1ACKAViTLji8I/8e8H5Po/i/04h4rS5f9fQD6bXBBZhqv5am3/Bf/xalr"></script>');

/*
	// preload tesseract for faster interaction
	let blankimg = new Image();
	blankimg = "data:image/png;base64,R0lGODlhAQABAIAAAP7//wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
	Tesseract.recognize(blankimg).progress().then((result)=>{
		$('#description').children("yt-formatted-string").prepend("Tesseract preloaded!\n")
	});
*/

	$(document).on("keydown",function(kevent){
	if (kevent.altKey && kevent.ctrlKey ) {
	//	$(document).on('click','video', function(){
		'use strict';

		(function(window, document) {
 			//was a blank div for mouse move result
			$('body').append('<div id="result" style=" font-family:\'Roboto\', sans-serif; z-index:-1; position:absolute; background-color:#eee; border-color: #333; border-radius:10px 10px 10px 10px; transition:transform 0.3s cubic-bezier(.02,1.23,.79,1.08);">Doing Stuff, please wait till this disappears<br>this will become a notification or something</div>');			

		    let canvas = document.createElement('canvas');
		    var video = document.querySelector('video');

		    canvas.width = parseInt(video.videoWidth);
		    canvas.height = parseInt(video.videoHeight);
		    
		    var ctx = canvas.getContext('2d');
		    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		    var base64ImageData = canvas.toDataURL('image/png');


			Tesseract.recognize(base64ImageData).progress((progress)=>{
				
				console.log(status);
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
		 		setTimeout(2000,()=>{
		 			$("#result").remove();
		 		});
		 		
		 	});
		

		})(window, document);
	//	});
	}
	});
});

