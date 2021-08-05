// window.setInterval(실행할함수, ms Gap);
/* var i=1;
setInterval(function(){
    console.log(i++);
},1000);
 */
/************** 전역변수 *****************/
var interval;



/************** 함수등록 *****************/




/************** 이벤트 콜백 *****************/
function createBox(v) {
    var r = random(0,256);
    var g = random(0,256);
    var b = random(0,256);
    var style = 'bakcground-color:rgb('+r+', '+g+', '+b+')';
    var box = '<div class="box" style="'+style+'"></div>';
    $(box).appendTo(v);
};

function onBtShow() {
    clearInterval(interval);
    interval = setInterval(createBox, 500, '.stage');
}

function onBtHide() {
    clearInterval(interval);
    $('.stage').empty();
}
/************** 이벤트 등록 *****************/
setTimeout(createBox, 500, '.stage');
$('.bt-show').click(onBtShow);
$('.bt-hide').click(onBtHide);