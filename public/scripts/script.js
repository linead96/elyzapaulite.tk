var portNavs = document.querySelectorAll(".port-nav");
var portSections = document.querySelectorAll(".port-content");

portNavs.forEach(function(element){
	element.addEventListener("click", changeSections);
});

function changeSections(event){
	switch(this.text){
		case "Web Design":
			hideSections();
			portSections[0].style.display = 'block';
		break;
		case "Banner":
			hideSections();
			portSections[1].style.display = 'block';
		break;
		case "Logo":
			hideSections();
			portSections[2].style.display = 'block';
		break;
		case "Art":
			hideSections();
			portSections[3].style.display = 'block';
		break;
	}
}

function hideSections(){
	portSections.forEach(function(element){
	     element.style.display = "none";
	});
}