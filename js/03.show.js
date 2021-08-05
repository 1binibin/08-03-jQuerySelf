//Animate를 연습해보자
(function() {
	alert('Animate를 연습해보자!')
})();


// 사라져 버튼
$('.bt1').click(function () {
	$('.box').hide(250);
	$('.bt1').hide();
	$('.bt2').show();
	$('.bt3').hide();
	$('.bt4').show();
	$('.bt5').hide();
	$('.bt6').show();


})

//나타나 버튼
$('.bt2').click(function() {
	$('.box').show(250);
	$('.bt2').hide();
	$('.bt1').show();
	$('.bt3').show();
	$('.bt4').hide();
	$('.bt6').hide();
	$('.bt5').show();

})

// 서서히 사라져 버튼
$('.bt3').click( function () {
	$('.box').stop().fadeOut(250);
	$('.bt3').hide();
	$('.bt4').show();
	$('.bt1').hide();
	$('.bt2').show();
	$('.bt5').hide();
	$('.bt6').show();
})

//서서히 나타나
$('.bt4').click(function() {
	$('.box').fadeIn(250);
	$('.bt4').hide();
	$('.bt3').show();
	$('.bt2').hide();
	$('.bt1').show();
	$('.bt6').hide();
	$('.bt5').show();
})

//위로 사라져
$('.bt5').click( function() {
	$('.box').slideUp(250);
	$('.bt5').hide();
	$('.bt6').show();
	$('.bt1').hide();
	$('.bt2').show();
	$('.bt3').hide();
	$('.bt4').show();
})

//아래로 나타나
$('.bt6').click(function() {
	$('.box').slideDown(250);
	$('.bt6').hide();
	$('.bt5').show();
	$('.bt2').hide();
	$('.bt1').show();
	$('.bt4').hide();
	$('.bt3').show();
})

// 연결 애니메이션.
$('.bt-ani').click(function() {
	$('.box').stop().hide(500, function () {
		$('.box').stop().show(500, function () {
			$('.box').stop().fadeOut(500, function() {
				$('.box').stop().fadeIn(500, function() {
					$('.box').stop().slideUp(500, function() {
						$('.box').stop().slideDown(500, function() {
							$('.box').stop().show(1000, function() {
								alert('애니메이션이 종료되었습니다.')
							})
						})
					})
				})
			})
		})
	})
})

//bt7 움직여 오른쪽으로 갔다가 왼쪽으로 되돌아오기.
$('.bt7').click(function() {
	$('.box2').stop().animate( {"right":"500px"}, 500,'linear', function() {
		$('.box2').stop().animate( {"left":"25px"},1000,'swing' );
	} )
});

//bt8 오른쪽으로 갔다가 커지고 작아지고
$('.bt8').click(function() {
	$('.box3').stop().animate( {"right": "250px"},500, 'swing', function() {
		$(this).stop().animate( 
			{"width":"150px",
			"height":"150px"
		}, 500, 'linear', function() {
			$(this).stop().animate( 
				{"width":"100px",
				"height":"100px",
				"left":"25px"
				}, 1000, 'linear', function () {
					$('.box3').clearQueue();
				});
		})
	} )
});

//bt9 호버시 2배로
$('.box4').on('mouseenter', function () {
	$(this).animate({"width":"500px","height":"500px"}, 1000, function() {
		$(this).on('mouseleave', function() {
			$(this).animate({"width":"100px","height":"100px"})
		})
	})
});