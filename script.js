document.addEventListener('DOMContentLoaded', function() {
    const katalogDiv = document.getElementById("katalog");
    const pageFlip = new St.PageFlip(katalogDiv, {
        width: 450, // base page width
        height: 800, // base page height

        size: "stretch",
        // set threshold values:
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,

        maxShadowOpacity: 0.5, // Half shadow intensity
        showCover: true,
        mobileScrollSupport: false
    });

    const pages = document.querySelectorAll(".page");
    //const orientationElement = document.querySelector(".page-orientation");
    pageFlip.on('init', (e) => {
        document.querySelector(".page-orientation").innerText = 'portrait';
    });
    pageFlip.loadFromHTML(pages);

    //document.querySelector(".page-orientation").innerText = pageFlip.getOrientation();

    /*window.addEventListener('resize', (e) => {
        const orientation = pageFlip.getOrientation();
        console.log("Window resized, current orientation:", orientation);
        if (orientationElement) {
            orientationElement.innerText = orientation;
        }
    });*/

    pageFlip.on("changeOrientation", (e) => {
        console.log("changed");
        document.querySelector(".page-orientation").innerText = e.data
    });


});

