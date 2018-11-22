var ddd = function () {
	window.onload = function () {
		var pyd_search = document.getElementById("backtop");
		window.onscroll = function () {
			if (window.scrollY >= 60) {
				pyd_search.className = "active";
				pyd_search.style.height = "50px";
			} else if (window.scrollY < 60) {
				pyd_search.className = "";
				pyd_search.style.height = "64px";
			}
		}
	}
}
ddd();