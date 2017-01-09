jQuery(document).ready(function($) {
	$('.progress').each(function(){ 
		var a = $(this).data('per');
		var b = a/10;
		$(this).css({
			height: b*2
		});
	});

	$('.menu__bar').click(function(event) {
		$(this).toggleClass('mobii');

		if($(this).hasClass('mobii')){
			$('aside').removeClass('mobi-side__bar');
	    	$('.dashboard__container').removeClass('mobi-dashboard__container');	
	    	$('aside').addClass('desk');
	    	$('.dashboard__container').addClass('desk'); 
		}else{
			$('aside').addClass('mobi-side__bar');
	    	$('.dashboard__container').addClass('mobi-dashboard__container');
	    	$('aside').removeClass('desk');
	    	$('.dashboard__container').removeClass('desk');			
		}

	});
});

	window.onresize = function(event) {
	    var wid = window.innerWidth;
	    console.log(wid);
	    if(wid<=1000){
	    	$('aside').addClass('mobi-side__bar');
	    	$('.dashboard__container').addClass('mobi-dashboard__container');
	    	$('aside').removeClass('desk');
	    	$('.dashboard__container').removeClass('desk');
	    }else{
	    	$('aside').removeClass('mobi-side__bar');
	    	$('.dashboard__container').removeClass('mobi-dashboard__container');	
	    	$('aside').addClass('desk');
	    	$('.dashboard__container').addClass('desk');    	
	    }
	};

