var sum = 0;
var arg = process.argv
for (var i = 2; i < arg.length; i++) {
	sum = sum + +arg[i];
}
console.log(sum);
