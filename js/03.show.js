$('.bt1').click(function() {
	// 시간을 안주면 바로 없어짐(display: none;)
	// 시간을 주면 주어진 시간동안 width, height, opacity가 줄어들면서 width, height, opacity가 0이 되면 사라짐(display: none)
	$('.box').stop().hide(5000, function() {
		// callback함수
		alert('사라졌어요~');
	}); 
});

$('.bt2').on('click', function() {
	$('.box').stop().show(1000); 
});

$('.bt3').on('click', function() {
	$('.box').stop().fadeOut('slow'); // "slow"(600), "normal"(400), "fast"(200), ms
});

$('.bt4').on('click', function() {
	$('.box').stop().fadeIn('fast'); 
});

$('.bt5').on('click', function() {
	$('.box').stop().slideUp(1000); 
});

$('.bt6').on('click', function() {
	$('.box').stop().slideDown(1000); 
});

$('.bt-ani').click(function() {
	$('.box').stop().fadeOut(1000, function() {
		$(this).stop().fadeIn(1000, function() {
			$(this).stop().slideUp(1000, function() {
				$(this).stop().slideDown(1000, function() {
					alert('애니메이션 종료');
				})
			})
		})
	})
});

$('.header-wrapper .navi').on('mouseenter', function() {
	// $(this).children('.sub-wp').stop().slideDown(1000); // 자식선택자
	$(this).find('.sub-wp').stop().slideDown(200); // 자손선택자
})
$('.header-wrapper .navi').on('mouseleave', function() {
	$(this).find('.sub-wp').stop().slideUp(200);
})

// console.log( document.getElementById('h1').innerHTML += "마바사아" );

$('.bt7').click(function() {
	//$('.box2').stop().animate(json형태의css, [ms시간(400), ('swing'(Def), 'linear'), fn(){}]);
	$('.box2').stop().animate({"left": "1000px"}, 2000, "swing");
	$('.box3').stop().animate({"left": "1000px"}, 2000, "linear", function() {
		console.log('Ani end')
	});
});

$('.bt8').click(function() {
	$('.box4').stop().animate({ 
		"width": "500px", 
		"height": "500px", 
		"opacity": .5,
		"left": "400px",
		"borderWidth": "30px",
	}, 2000);
});
// https://www.w3schools.com/jquery/eff_animate.asp

$('.bt9').click(function() {
	$('.box5').addClass('active');
})


// console.log(JSON.parse(JSON.stringify({ name: "홍길동" })));
