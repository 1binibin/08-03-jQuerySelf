/*************** global init **************/
var $slide = $('.wrapper1 .slide-wrap');
var $pager = $('.wrapper1 .pager');
var interval, n = 1, speed = 2000, aniSpeed = 500, cnt = $slide.find('.slide').length;
/************** user function *************/
function chgPager(idx) {
    $pager.removeClass('active');
    $pager.eq(idx).addClass('active');
}


/************** event callback ************/
function onAni() {
    $slide.stop().animate({'left': -n * 100 +'%'}, aniSpeed, function() {
        if(n === cnt - 1) {
            $slide.css('left', 0);
            chgPager(0);
            n = 1;
        }
        else {
            chgPager(n++);
        }
    });
}

function onEnter() {
    clearInterval(interval);
}

function onLeave() {
    interval = setInterval(onAni, speed);
}

function onPagerClick() {
    n = $(this).index();
    onAni();
}
/*************** event init ***************/
interval = setInterval(onAni, 2000);
$slide.mouseenter(onEnter).mouseleave(onLeave);

$pager.click(onPagerClick)

/*************** start init ***************/


