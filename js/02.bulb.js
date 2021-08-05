/********call back*************/





/****************-self made-******************/
$('.bt-on').on('click', function () {
	$('.img-wrap img').attr('src','../img/on.png');
	$('.bt-on').hide();
	$('.bt-off').show();
	alert('전구가 꺼졌어요!')
});

$('.bt-off').on('click', function() {
	$('.img-wrap img').attr('src', '../img/off.png');
	$('.bt-off').hide();
	$('.bt-on').show();
	alert('전구가 켜졌어요!')
}) 

/*******JS***********/
