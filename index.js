/*var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Do you want to sort? ", function(answer) {
  // TODO: Log the answer in a database
  bubbleSort(answer.split(','))
  rl.close();
}); */
const Chalk = require('chalk')

function bubbleSort(arr) {
	len = arr.length;
	none = 0;
	x = 0;
	swapsTotal = 0;
	passes = 0;
	while(passes < arr.length ^ 2 && none < 100) {
		if(arr[x] > arr[x + 1]) {
			d = arr[x];
			c = arr[x + 1];
			arr[x] = c;
			arr[x + 1] = d;
		} else {
			none++;
		}
		x++;
		swapsTotal++;
		if(x == len + len) {
			x = 0;
			passes++;
		}
		console.clear();
//		console.log(arr.join(', '))
	}
	
	console.log(arr.join(',\n'));
	console.log('\n\nIn ' + passes + ' Passes');
	console.log('\n\nIn ' + swapsTotal + ' Swaps');
}
let arr = [2, 1]
bubbleSort(arr)