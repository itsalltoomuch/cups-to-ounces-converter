$(document).ready(function () {

	$("button").click(function () {
		var cup = $("#cups").val();
		var factor = 8.345404;
		var density = 1; // density of water
		var ounce = cup * factor * density;
		console.log(ounce);
		$("#result").text(ounce);
	});
});


