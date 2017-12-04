	var s = $(".header-sticky");
	var pos = s.position();
	    $(window).scroll(function () {
	        var windowpos = $(window).scrollTop();
	        if (windowpos > pos.top) {
	            s.addClass("stick");
	        } else {
	            s.removeClass("stick");
	        }
	 });