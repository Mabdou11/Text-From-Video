# Youtube-OCR
This is a chrome extension, that uses Tesseract.js to recognize text from video.

The recognized text is automatically copied to clipboard

For now, it is not trained on any additional data
If it's clear and a wellknown font, it would recognize it without problems
If the frame has a lot of variation (textures, shapes, different contrasty objects) it would return gibberish most likely.



In the latest commits of naphta/tesseract.js they added real-time video recognition, so this could make this app redundant.

huge thanks to https://github.com/naptha/tesseract.js for making it so easy to implement


#### How to Use:
 - You can select a portion of the video to recognize it. (you can select what you want on the frame, but the right and bottom is not shown completely)
 - hit Alt + Ctrl you will get some progress info on the side of the cursor
 - if page is new, and you directly hit Alt + Ctrl, it will read the entire frame.

### Installation
- Go to: chrome://extensions/
- Activate developper mode
- Click on LOAD UNPACKED
- Go to the cloned repository
- click SELECT


