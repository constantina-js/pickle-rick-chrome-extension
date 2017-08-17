
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

var pickleAudio = document.createElement("AUDIO");
pickleAudio.id = "pickleAudio";
pickleAudio.src = chrome.runtime.getURL('mp3/turned-myself-to-a-pickle.mp3');
document.body.appendChild(pickleAudio);	
document.getElementById("pickleAudio").load();

var clickCounter = 0;

//flip the pickle over, Morty
img.addEventListener("click", function(){

	clickCounter++;

	if(clickCounter == 1){
		document.getElementById("pickleAudio").play();
	} else {
		document.getElementById("pickleAudio").pause();
		pickleAudio.src = chrome.runtime.getURL('mp3/im-pickle-rick.mp3');
		pickleAudio.load();

	}

	if(img.src==chrome.runtime.getURL('img/back-pickle.png')){
		pickleAudio.play();
		document.getElementById("pickleRickImg").src = chrome.runtime.getURL('img/front-pickle.png');	
		

	} else {

		document.getElementById("pickleRickImg").src = chrome.runtime.getURL('img/back-pickle.png');
	}

});




