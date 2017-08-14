var div = document.createElement("DIV");	//create div element
div.id = "pickleRick";		//give div element id

var img = document.createElement("IMG");	//create img element
img.src = chrome.runtime.getURL('img/front-pickle.png');	//get img src

div.appendChild(img);	//add img to div
document.body.appendChild(div);		//add div to body