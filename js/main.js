$(function(){
	$('.project').click(function(){
		var clicked = $(this);


		// Showing and hiding project details
		if ( $(clicked).hasClass('open') ){
			$(clicked).removeClass('open').find('.details').slideUp();
		} else {
			$('.project.open').removeClass('open').find('.details').slideUp();
			$(clicked).addClass('open').find('.details').slideDown();
		}

		// Making sure the just clicked project is in the


		//$('.details.open').removeClass('open');
		//$(clicked).find('.details').addClass('open');
	});
	$('.bio-details').hide();
	$('#bigtext').bigtext();
	$('.fi-2').bigtext();
	$('.bio-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('.bio-long').toggleClass('show');
	});
});