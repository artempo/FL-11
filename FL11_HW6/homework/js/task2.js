// Your code goes here
var a = +prompt('a');
var b = +prompt('b');
var c = +prompt('c');
if (a + b <= c || b + c <= a || a + c <= b) {
	console.log("Triangle doesn’t exist");
} else if (a == b && b == c && a == c) {
	console.log("Equivalent triangle");
} else if (a == b || b == c || a == c) {
	console.log("Isosceles triangle");
} else if (a !== b && b !== c && a !== c) { 
	console.log("Normal triangle");
} else { 
	console.log("Normal triangle");
}