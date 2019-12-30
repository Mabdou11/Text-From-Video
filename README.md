# Text Recognition from Web Videos
A chrome extension to recognize text from a video using Tesseract.js.
This is mainly focused on [YouTube](https://www.youtube.com/) videos

In theory, it should work on any webpage that contains a <video> tag.
 
 
 #### Some problems:
- When the page does not contain the video tag initially, the canvas is not created afterwards.
 > **Solution**: Open videos on a new tab, or simply refresh it.
- When the video tag is removed from the webpage, the canvas does not disappear.
 > **Solution**: refresh the page, or try opening it in a new tab.
 
  
The recognized text should be automatically copied to clipboard
>If that doesn't work, simply try it again, I ignore why it fails sometimes.

For now, it is not trained on any additional data
If it's clear and a wellknown font, it would recognize it without problems
If the frame has a lot of variation (textures, shapes, different contrasty objects) it would  most likely return random symbols.
It's recommended to use the highest resolution possible for now.



### How to Use it:
 - Select the desired portion of the video, press and hold the mouse button, and drag over the text until you cover the whole section.
 - Press Alt + Ctrl to start the recognition (this is temporary)
 - Wait a little, until the recognised text gets shown to the right side of the cursor.
 - It should to automatically copied to the clipboard (do it again if it is not).
 - Hit directly Alt + Ctrl on a freshly loaded page to recognize the entire video frame (takes time, not recommended).

![Select text area](./p1.gif)
#### Alt+Ctrl
![Paste recognized text](./p2.gif)

Figure 1 video: [_Three Runners Puzzle_](https://www.youtube.com/watch?v=C6emQS14Tbk) is from YouTube channel: [**MindYourDecisions**](https://www.youtube.com/channel/UCHnj59g7jezwTy5GeL8EA_g).

### Installation
- Go to: chrome://extensions/
- Activate developper mode
- Click on LOAD UNPACKED
- Go to the cloned/downloaded repository
- click SELECT


#### some problems:
  - When video is not opened in a new tab, or is not refreshed, it does not load the app, that is because there is no video in the main page, and the extention does not refrech if you access a link from the same tab.
  You either have to open in a new tab, or just refresh it.
   Similarly, if you get back to main youtube page from a video page, the app would still continue to run. (same cause, same solution). 
   
  - It does not fully work on fullscreen, or when you Enable/Disable Theater mode on YouTube without refreshing the page.
  
##### Next step:
    - Fix those problems
    - dynamically change the canvas size according to the video without refreshing
    - train the model on more fonts and styles
    
This project is using tesseract.js version from https://github.com/naptha/tesseract.js
