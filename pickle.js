//create div element and assign div id
var div = document.createElement("DIV");	
div.id = "pickleRick";		

//create img element and provided img source
var img = document.createElement("IMG");
img.src = chrome.runtime.getURL('img/front-pickle.png');

//added img to div and then add div to body
div.appendChild(img);
document.body.appendChild(div);	