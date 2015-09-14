// var getName = function(arg1) {
// 	var person = {
// 		name : 'Luisa',
// 		age  : 25,
// 	}
// 	return person.name

// }
// // console.log(getName())

// var totalLetters = function(arr) {
	
// 	return arr.join("").length;

// }
// // console.log(totalLetters(['javascript', 'is', 'awesome']))

// var array = ['javascript', 'is', 'awesome']
// array

// var string = "I like string cheese"

// var keyValue = function(key, value) {
// 	return {[key]: value};
// }

// console.log(keyValue('city', 'Denver'))
var negativeIndex = function(arr, index) {
	return arr[arr.length + index]
}

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))


var removeM = function(string) {
	var array = string.split("")
	for (var i = 0; i < array.length; i++) {
		if (array[i] === 'm') {
			array[i] = ""
		}
	}
	return array.join("")
}
// console.log(removeM('mommy'))
// console.log(removeM('money'))

var printObject = function(obj){
	return obj.toString
}
console.log(printObject({a: 10}))