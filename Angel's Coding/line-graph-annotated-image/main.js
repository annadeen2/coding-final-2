document.addEventListener("DOMContentLoaded", function () {
	const dots = document.querySelectorAll(".dot");
	dots.forEach(function (dot) {
		dot.addEventListener("click", function (e) {
			e.preventDefault();
			const clicked_dot = e.target.closest(".dot");
			if (clicked_dot.classList.contains("active")) {
				clicked_dot.classList.remove("active");
			} else {
				clicked_dot.classList.add("active");
			}
		});
	});
});