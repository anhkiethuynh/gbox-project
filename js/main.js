$(window).on("load", function () {
	$(".svg").svgToInline();
});

$(".btn-menu").on("click", function () {
	if ($(this).hasClass("opened")) {
		// console.log(true);
		$(".menu").addClass("opened");
	} else {
		$(".menu").removeClass("opened");
	}
});

$(".btn-top").on("click", function () {
	$("html").animate({
		scrollTop: 0,
		scrollBehavior: "smooth",
	});
});
