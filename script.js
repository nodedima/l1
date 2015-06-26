

var images = [ { descr: 'w3', path: './images/0.png' },
{ descr: 'html', path: './images/1.png' },
{ descr: 'css', path: './images/2.png' },
{ descr: 'js', path: './images/3.png' }, ];

var index = 0;



window.onpopstate = function(event) {
	index = event.state;

	changeImg(index);
	console.log("Restored " + images[index].descr);
}


window.onload = function() {
	//./index_0.html --> '0'
	var curFile = window.location.toString().split('/').pop().split('.')[0].split('_').pop();
	for(var i = 0; i < images.length; ++i) {

		var imgFile = images[i].path.split('/').pop().split('.')[0];
		if(imgFile === curFile) {
			index = i;
			break;
		}
	}

	window.history.replaceState(index, images[index].descr, null);
	changeImg();
	console.log("Start from " + images[index].descr);
}


function changeImg() {
	document.getElementById("changingImg").src = images[index].path;
	document.getElementById("descriptionImg").innerHTML = images[index].descr;
	document.title = images[index].descr;
}


function moved(value) {
	var newIndex = index + value;
	if(newIndex === -1 || newIndex === images.length) {
		return;
	}
	index = newIndex;

	changeImg();
	var imgIndex = images[index].path.split('/').pop().split('.')[0];
	var pageName = "index_" + imgIndex + ".html";
	window.history.pushState(index, images[index].descr, pageName);
	console.log("Saved " + images[index].descr);
}



