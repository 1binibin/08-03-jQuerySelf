//window.setInterval(실행할함수, ms Gap);
/* var i = 1;
setInterval(function() {
    console.log(i++)
}) */

/************** 전역(Global)변수 **********************/
var interval;

/************** 함수등록 **********************/



/************** 이벤트 콜백 **********************/
function createBox(el) {
    var r = random(0,256); //Math.floor( Math.random()*256 );
    var g = random(0,256);
    var b = random(0,256);
    var style = 'background-color: rgb('+r+', '+g+', '+b+' );';
    var html = '<div class="box" style="'+style+'"></div>';
    $(html).appendTo(el);
}



function onBtShow() {
    clearInterval(interval);
    interval = setInterval(createBox, 300, '.stage');
}

function onBtHide() {
    clearInterval(interval);
    $('.stage').empty();
}


/************** 이벤트 등록 **********************/
setTimeout(createBox, 1000, '.stage'); // 1번만 실행
$('.bt-show').click(onBtShow);
$('.bt-hide').click(onBtHide);

