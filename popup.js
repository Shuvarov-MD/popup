$(document).ready(function () {
	var modal = $('.popup'),
		overlay = $('.overlay'),
		button = $('.btn[data-popup="true"]'),
		close = $('.close-btn');

	button.on('click', function () {
		$('.fruit-name').text($(this).attr('data-fruit'));
		modal.toggleClass('popup_active');
		overlay.show();
	});

	close.click(function() {
		modal.toggleClass('popup_active');
		overlay.hide();
	});

	$(this).on('keyup', function (event) {
		if(event.which == 27 && modal.hasClass('popup_active')) {
			modal.toggleClass('popup_active');
			overlay.hide();
		}
	});

	$(this).on('mouseup', function (e) {
		if(!modal.is(e.target) && modal.has(e.target).length === 0 && modal.hasClass('popup_active')) {
			modal.toggleClass('popup_active');
			overlay.hide();
		}
	});
});~