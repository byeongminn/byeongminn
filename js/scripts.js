window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (
        document.body.scrollTop > 30 ||
        (document.documentElement.scrollTop > 30)
    ) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}