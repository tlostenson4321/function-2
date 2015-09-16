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

// var printObject = function(obj){
// 	return obj.toString
// }
// // console.log(printObject({a: 10}))
// This is so wrong but not sure how to do it.

// var vowels = function(str) {
// 	var arr = [ ]
// 	for ( i= 0; i < str.length; i++) {
// 		if (str.length[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
// 			arr.push(str[i])
// 		}
// 		else {

// 		}
// 	}
// 	return arr
// }


// This just pulls the last part of the array. so no
// var vowels = function(str) {
// 	var arr = str.split("")
// 	for (var i= 0; i < arr.length; i++) {
// 		if (arr[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
// 			var array = []
// 			array.push(arr[i])
// 		}
		
// 	}
// 	return array
// }

// console.log(vowels('alabama'))
// console.log(vowels('What evil odd ducks!'))

var vowels = function(string) {
	var arr = [ ]
	for (var i = 0; i < string.length; i++ ){
		if (string.charAt(i) === 'a' || 'e' || 'i' || 'o' || 'u') {
			arr.push(string.charAt(i))
		}

	}
	return arr
}
console.log(vowels('alabama'))
console.log(vowels('What evil odd ducks!'))

// This is pulling the whole string not just the single characters.
