var NumStart = [0, 1];
//console.log(NumStart);
//var i=0;
var temp = 0;
//console.log(NumStart[0]);
//console.log(NumStart[1]);
function fib(limit) {
	for (let i = 1; i < limit - 1 ; i++) {
		if (i == 1) {
			console.log(NumStart[0]);
			console.log(NumStart[1]);
		}
		var temp = NumStart[i - 1] + NumStart[i];
		NumStart.push(temp);
		console.log(temp);
	}
}

fib(12);

//0,1,1,2,3,5,8,13......
