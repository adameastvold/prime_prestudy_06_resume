// SPLASH SCREEN
$(document).ready(function() {

$('.overlay').on('click', function() {
		

		
		$(this).hide('.overlay');


	}); 


// MODAL EXPERIMENT


	$('.js-show-modal').on('click', function(event) {
		event.preventDefault();

		$('.js-modal').addClass('is-visible');
		$('.js-modal-overlay').addClass('is-visible');
	});

	$('.js-modal-overlay').on('click', function(event) {
		$('.js-modal').removeClass('is-visible');
		$('.js-modal-overlay').removeClass('is-visible');
	});




});