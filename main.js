//MAP FILTER JS
// wait for dom ready
document.addEventListener("DOMContentLoaded", function (e) {
	/**
	 * Capture all filters into a NodeList
	 */
	const filter_dropdowns = document.querySelectorAll("select.filter");

	/**
	 * Listen to each filter dropdown for a change and fire the filter function
	 */
	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			/**
			 * on change, run the filter_movies function
			 * which will re-evaluate all three dropdown selections and generate
			 * a fresh selector for the filters
			 */
			filter_map();
		});
	});
});

/**
 * This function grabs the value of each dropdown and builds
 * a combined class to show/hide
 */
function filter_map() {
	/**
	 * Capture the value of each dropdown
	 */
	const education_class = document.querySelector("#education").value;
	const time_class = document.querySelector("#time").value;
	const delay_class = document.querySelector("#delay").value;
	const year_class = document.querySelector("#year").value;

	/**
	 * Remove .active from each active item
	 */
	const active_items = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	/**
	 * Show items that match the dropdowns
	 */
	let selector = ".item";
	if (education_class !== "") {
		selector = `${selector}.${education_class}`;
	}
	if (time_class !== "") {
		selector = `${selector}.${time_class}`;
	}
	if (delay_class !== "") {
		selector = `${selector}.${delay_class}`;
	}
	if (year_class !== "") {
		selector = `${selector}.${year_class}`;
	}

	const filtered_items = document.querySelectorAll(selector);

	/**
	 * If the nodelist is empty, this means no items match, so we should show the empty state
	 */
	if (filtered_items.length === 0) {
		document.querySelector(".item.empty").classList.add("active");
	}

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});
}