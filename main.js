var getName = function(arg1) {
	var person = {
		name : 'Luisa',
		age  : 25,
	}
	return person.name

}
// console.log(getName())

var totalLetters = function() {
	console.log(arguments)
	for ( i =0; i < arguments.length; i++){
		console.log(arguments.length)
	}

}
console.log(totalLetters(['javascript', 'is', 'awesome']))

