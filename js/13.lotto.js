
/**************** 로또 프로그램 *****************/
function choiceLotto() {
	var numbers = [];
	var lotto = new Array();
	for(var i=0;i<=45;i++) numbers.push(i);
	console.log(numbers);
	while(lotto.length < 6) {
		var idx = random(0,45) ;
		if(lotto.indexOf(numbers[idx]) === -1) lotto.push(numbers[idx]);
	}
	//로또라는 배열은 비어있고 indexOf 를 사용해서 값이 없다면 넣어라
	lotto.sort(function(a, b) {return a - b});
	setHtml(lotto);
}



function setHtml(lotto) {
	var lottoEl = document.getElementById('lotto');
	var historyEl = document.getElementById('history');
	var html = lottoEl.innerHTML;
	historyEl.innerHTML = '<li><ul class="d-flex my-2 justify-content-center">'+html+'</ul></li>' + historyEl.innerHTML;
	lottoEl.innerHTML = '';
	for(var i=0; i<6; i++) {
		lottoEl.innerHTML += '<li class="ball '+getLottoColor(lotto[i])+'">'+lotto[i]+'</li>';
	}
}

function getLottoColor(n) {
	var color = '';
	if(n <= 10) color = 'yellow';
	else if(n <= 20) color = 'blue';
	else if(n <= 30) color = 'red';
	else if(n <= 40) color = 'black';
	else color = 'green';
	return color;
}
