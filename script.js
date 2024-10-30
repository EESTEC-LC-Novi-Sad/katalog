

document.addEventListener('DOMContentLoaded', function() {
	console.log("Hello");
	const katalogDiv = document.getElementById("katalog");
	const pageFlip = new St.PageFlip(katalogDiv, {
		width: 550, // base page width
		height: 733, // base page height

		size: "stretch",
		// set threshold values:
		minWidth: 315,
		maxWidth: 1000,
		minHeight: 420,
		maxHeight: 1350,

		maxShadowOpacity: 0.5, // Half shadow intensity
		showCover: true,
		mobileScrollSupport: true // disable content scrolling on mobile devices
	});

	const pages = document.querySelectorAll(".page");
	pageFlip.loadFromHTML(pages);


});
	


