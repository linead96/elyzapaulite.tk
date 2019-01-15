var portNavDivs = document.querySelectorAll(".port-nav-div");
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
			portNavDivs[0].classList.add("active");
		break;
		case "Banner":
			hideSections();
			portSections[1].style.display = 'block';
			portNavDivs[1].classList.add("active");
		break;
		case "Logo":
			hideSections();
			portSections[2].style.display = 'block';
			portNavDivs[2].classList.add("active");
		break;
		case "Art":
			hideSections();
			portSections[3].style.display = 'block';
			portNavDivs[3].classList.add("active");
		break;
	}
}

function hideSections(){
	portSections.forEach(function(element){
	     element.style.display = "none";
	});
	portNavDivs.forEach(function(element){
	     element.classList.remove("active");
	});
}