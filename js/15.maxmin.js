function getLotto() {
	var lotto = [];
	for(var i=0; i<=45;i++)
	while(lotto.lenght < 6) {
		var num = random(1,45);
		if(lotto.indexOf( num[idx] === -1 ) ) lotto.push(num);
		console.log(num);
	}
}