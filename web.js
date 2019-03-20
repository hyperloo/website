

$(document).ready(function(){
	$('.nav-link').click( function(e) {
		var li = $(this).attr('href');
		e.preventDefault();
			
		$('html,body').animate( {
			scrollTop:$(li).offset().top
			},1250);
		});
		AOS.init({
			duration: 1500,
		});

		$('ul.nav li.dropdown').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(150).fadeIn(300);
		}, function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(150).fadeOut(300);
		});
});


$(document).ready(function(){
	
})
