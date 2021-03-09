function foo() {
	console.log('module import');
}

export {foo}

let x = 10;
let y = 20;

function area() {
	return x * y;
}

function round() {
	return 2* (x + y);
}

export {area, round}

var a1 = 1 , a2 = 2;
export {a1, a2};

export default {}
export var a = 100;