var d = new Date(); //객체의 Instance
var month = ['1월','2월'];
console.log(d);
console.log(d.__proto__);
console.log(d.getFullYear());       // 2021
console.log(d.getMonth());          // 0 ~ 11      
console.log(d.getDate());           // 3
console.log(d.getDay());            // 0(Sunday) ~ 6
console.log(d.getHours());          // 24시간제 (0~23)
console.log(d.getMinutes());        // 0 ~ 59
console.log(d.getSeconds());        // 0 ~59
console.log(d.getTime());           // timestamp(1970.01.01 00:00:00)

var nowDate = d.getFullYear() + '-' + zp(d.getMonth() + 1) + '-' + zp(d.getDate()) + ' ' + zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds());
console.log(nowDate); // ISO 시간표기

setInterval(onInterval,1000);
function onInterval() {
    /*
    var yoil = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var d = new Date();
    var date = d.getFullYear() + '-' + zp(d.getMonth() + 1) + '-' + zp(d.getDate()); 
    var time = zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds());
    document.querySelector('.date-wp').innerHTML = date + '. '; + yoil[d.getDay()];
    document.querySelector('.time-wp').innerHTML = time;
    */
    document.querySelector('.date-wp').innerHTML = moment().format('YYYY-MM-DD. ddd');
    document.querySelector('.time-wp').innerHTML = moment().format('HH:mm:ss');
    document.querySelector('.timestamp-wp').innerHTML = new Date().getTime();

}