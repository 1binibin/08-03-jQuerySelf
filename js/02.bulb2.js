/*******JS***********/
// 1. btOn 클릭 이미지 On변경 bton 숨고 btoff 나타나고

function toggleBtn(chk) {
var bulb = document.getElementById('bulb');
var btOn = document.getElementById('btOn');
var btOff = document.getElementById('btOff');
	if(chk){
		bulb.src = '../img/on.png';
		btOn.style.display = 'none';
		btOff.style.display = 'inline-block';
	}
	else{
		bulb.src = '../img/off.png';
		btOn.style.display = 'inline-block';
		btOff.style.display = 'none';
	}
};

