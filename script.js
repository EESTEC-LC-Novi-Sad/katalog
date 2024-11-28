let mydata;

document.addEventListener('DOMContentLoaded', function() {
    mydata = document.getElementById("mydata");
    const katalogDiv = document.getElementById("katalog");
    const pageFlip = new St.PageFlip(katalogDiv, {
        width: 521, // base page width
        height: 1128, // base page height
	
        size: "stretch",
        // set threshold values:
        minWidth: 315,
        maxWidth: 2000,
        minHeight: 420,
        maxHeight: 4000,

        autoSize: true,
	maxShadowOpacity: 0.5, // Half shadow intensity
        showCover: true,
        mobileScrollSupport: false,
	swipeDistance: 10,
	flippingTime: 750
    });

    pageFlip.loadFromImages(getAllImages("images/katalog"));
	
});

function getAllImages(path) {
    const ret = [];
    const pageNum = Number(mydata.dataset.stranice);
    for (let i = 1; i <= pageNum; ++i) {
        ret.push(`${path}/${i}.jpg`)
    }

    return ret;
}
