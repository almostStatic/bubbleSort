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

function bubbleSort(arr, logTotalPassess) {
	len = arr.length;
	none = 0;
	x = 0;
	swapsTotal = 0;
	passes = 0;
	while (passes < arr.length ^ 2 && none < 100) {
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

	if (!logTotalPassess) {
		logTotalPassess = null;
	}
	console.log(arr.join(',\n'));
	if (logTotalPassess == true) {
	console.log(Chalk.greenBright("List Sorted!"))
	console.log(Chalk.cyanBright('\n\nIn ' + passes + ' Passes'));
	console.log(Chalk.cyanBright('\n\nIn ' + swapsTotal + ' Swaps'));
	} else= if (logTotalPassess == false || (typeof(logTotalPassess) == null)) {

	}
}
let arr = [2, 1]
bubbleSort(arr, true)

/*
	Collaboration between @asadhumayun and @rossjames
*/