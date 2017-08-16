
//create div element and assign div id
var div = document.createElement("DIV");	
div.id = "pickleRick";		

//create img element and provided img source
var img = document.createElement("IMG");
img.id = "pickleRickImg"
img.src = chrome.runtime.getURL('img/back-pickle.png');

//added img to div and then add div to body
div.appendChild(img);
document.body.appendChild(div);	

//flip the pickle over, Morty
img.addEventListener("click", function(){

	if(img.src==chrome.runtime.getURL('img/back-pickle.png')){
		document.getElementById("pickleRickImg").src = chrome.runtime.getURL('img/front-pickle.png');
	} else {
		document.getElementById("pickleRickImg").src = chrome.runtime.getURL('img/back-pickle.png');
	}

});




