# Youtube-OCR
This is a chrome extension, that uses Tesseract.js to recognize text from video.

the recognized text is automatically copied to clipboard

For now, it is not trained on any additional data
if it's clear and a wellknown font, it would recognise without problems
if the frame has a lot of variation (textures, shapes, different contrasty objects) it would return gibberish



In the latest commits of naphta/tesseract.js they added real-time video recognition, so this could make this app redundant.

huge thanks to https://github.com/naptha/tesseract.js for making it so easy to implement


#### How to Use:
 - You can select a portion of the video to recognize it. (it does not let you select the entire video, some scaling problems maybe)
 - hit Alt + Ctrl you will get some progress info on the side of the cursor
 - if page is new, and you directly hit Alt + Ctrl, it will read the entire frame.

### Installation
- Go to: chrome://extensions/
- Activate developper mode
- Click on LOAD UNPACKED
- Go to the cloned repository
- click SELECT


