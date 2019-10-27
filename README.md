# Youtube-OCR
This is a chrome extension, that uses Tesseract.js to recognize text from video.

the recognized text is automatically copied to clipboard

For now, it is not trained on any additional data
if it's clear and a wellknown font, it would recognise without problems
if the frame has a lot of variation (textures, shapes, different contrasty objects) it would return gibberish

the next step of this is to use a bounding rectangle to only select the desired bit of the frame



in the latest commits of naphta/tesseract.js they added real-time video recognition, so this could make this app redundant.

huge thanks to https://github.com/naptha/tesseract.js for making it so easy to implement
