	
	===== I Uses This Code ====
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

	===== Another Sticky Code ====
	var sticky_menu = $('#sticker');
	    var pos = sticky_menu.position();
	    if (sticky_menu.length) {
		var windowpos = sticky_menu.offset().top;
		$(window).on('scroll', function() {
		    var windowpos = $(window).scrollTop();
		    if (windowpos > pos.top) {
			sticky_menu.addClass('stick');
		    } else {
			sticky_menu.removeClass('stick');
		    }
		});
	    }

	===== Another Sticky Code ====
	$(window).scroll(function() {
	if ($(this).scrollTop() > 32){  
	    $('.header').addClass("sticky");
	  }
	  else{
	    $('.header').removeClass("sticky");
	  }
	});

 
