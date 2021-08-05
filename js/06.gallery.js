var foods = [
	{ name: 'Popcicle', src: '../img/f1.jpg' },
	{ name: 'Salmon', src: '../img/f2.jpg' },
	{ name: 'Sandwitch', src: '../img/f3.jpg' },
	{ name: 'Steak', src: '../img/f4.jpg' },
	{ name: 'Wine', src: '../img/f5.jpg' },
	{ name: 'Cherry', src: '../img/f6.jpg' },
	{ name: 'Croissant', src: '../img/f7.jpg' }
];

for(var i=0; i<foods.length;i++ ) {
	html = '<li class="list">';
	html += '<img src="'+foods[i].src+'" alt="'+foods[i].name+'" class="w100 thumb">';
	html += '</li>';
	$('.list-wrap').append(html);
}
/* //1차버전
$('.list-wrap .thumb').click(function() {
	$('.stage-wrap .big').attr('src', $(this).attr('src'));
	$('.stage-wrap .name').html($(this).attr('alt'));
	$('.list').removeClass('active');
	$(this).parent().addClass('active');
}) */

//2차버전  대상을 appenTo 해서 뒤로 오게끔하고(position:absolute, z-index:2)적용 됨, 떠오른뒤 기존 사진 hide()실행
// 먼저 사진의 src를 뒤에 붙인 src로 바꾸어준다. 그리고 this삭제
$('.list-wrap .thumb').click(function() {
	var html = '<div class="hover"><img src="'+$(this).attr('src')+'" class="w100"></div>';
	$(html).appendTo('.stage-wrap').stop().hide().fadeIn(1000, function() {
		$('.stage-wrap .big').attr('src', $(this).find('img').attr('src'))
		$(this).remove();
	});
	$('.stage-wrap .name').html($(this).attr('alt'));
	$('.list-wrap .list').removeClass('active');
	$(this).parent().addClass('active');
});
