$(document).ready( function() {
		var value = $("#links a");
		var value1 = $("#links a:even");
		var value2 = $("#links a:odd");
		value1.on("mouseover", function() {
			$(this).animate({ color: "#D7DCFA"}, 150);
		});
		value2.on("mouseover", function() {
			$(this).animate({ color: "#D3FCD6"}, 150);
		});
		$(value).on("mouseout", function() {
			$(this).finish();
			$(this).animate({ color: "#ffffff"}, 150);
		});
});