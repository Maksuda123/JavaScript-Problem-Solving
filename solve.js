//1. Factorial

function firstFactorial(num) {
  return num === 1 ? 1 : num * firstFactorial(num - 1);
}

console.log(firstFactorial(5));

/////////////////////////////////////////////////////////

//2. reverse string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Maksuda Mila"));


//Array reverse
const array1 = ["one", "two", "three"];
const reversed = array1.reverse();
console.log("reversed:", reversed);
//output: reversed:['three', 'two', 'one']

//string split
const str = "How are you";
const stringSplit = str.split("").reverse("").join("");
console.log(stringSplit);
//output: uoy era woH

//////////////////////////////////////////

//2. reverse string way No 2.
function firstReverse(str) {
  const reverseArray = [];
  for (i = str.length - 1; i > -1; i--) {
    reverseArray.push(str[i]);
  }
  str = reverseArray.join("");
  return str;
}
console.log(firstReverse("Maksuda Mila"));



//////////////////////////////////////////


//3. user name Validation

function usernameValidation(str) {
  const regExpression = /^[a-zA-Z]\w+[A-Za-z0-9]$/;

  const length = (str) => str.length >= 4 && str.length <= 25;
  return regExpression.test(str) && length(str);
}

console.log(usernameValidation("u__hello_world123"));
//output: true


/////////////////////////////////////////////

//4. Factorial
function factorial(n) {
  return n === 1 ? 1 : factorial(n - 1);
}

const fact = factorial(4);
console.log(fact);


//////////////////////////////////////////

//5. BracketCombibation

function bracketCombibation(num) {
  let factorial = (n) => {
    let k = 1;
    for (var i = n; i >= 1; i--) {
      k *= i;
    }
    return k;
  };
  const result = factorial(2 * num) / (factorial(num + 1) * factorial(num));
  return result;
}
const finalResult = bracketCombibation(5);
console.log(finalResult);


//////////////////////////////////////////

//6. Find Intersection
function FindIntersection(strArr) {
  const arrayOne = strArr[0].split(", ");
  const arrayTwo = strArr[1].split(", ");
  let result = arrayOne.filter((arrTwo) =>
    arrayTwo.find((arrOne) => arrOne === arrTwo)
  );
  return result.length > 0 ? result.join(",") : "false";
}

const myArray = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log(myArray);
const finalResult = FindIntersection(["1, 3, 5, 10, 17, 18", "2, 4, 9, 4"]);
console.log(finalResult);
//output: False


//////////////////////////////////////////


//7. Questions Marks
function QuestionsMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));



//////////////////////////////////////////


//8. Tree Constructor
function TreeConstructor(strArr) {
  let parents = {};
  let children = {};

  for (let i = 0; i < strArr.length; i++){
    //"(1,2)" => ["1", "2"]
    let pair = strArr[i].replace(/[()]/g, "").split(",");
    let child = pair[0];
    let parent = pair[1];

    if (parents[parent]) {
      parents[parent].push(child);
      console.log(parents[parent])
    }
    else {
      parents[parent] = [child];
    }
    if (parents[parent].length > 2) {
      return false;
    }
    if (children[child]) {
      return false;
    } else {
      children[child] = parent;
    }
  }
  return true;
}
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));




////////////////////////////////////////////

//9. minimum window substring

function MinWindowSubstring(strArr) {
	let str = strArr[0];
	let needle = strArr[1].split('');

	//start with the smallest possible substrings, then go up
	for (let i = needle.length, len = str.length; i <= len; i++ ) {
		for (j = 0; j <= len - i; j++) {
			let mySlice = str.substr(j, i);
			if (isContained(mySlice)) {
				return mySlice;
			}
		}
	}
	return 'Not in string';

	//isContained checks to see if all the chars in the needle are in the given string
	function isContained(str) {
		let arr = str.split('');
		for (let i = 0, len = needle.length; i < len; i++) {
			let place = arr.findIndex(val => {
				return val === needle[i]
			});
			if (place === -1) {
				return false;
			} else {
				arr.splice(place, 1);
			}
		}
		return true;
	}
}
   
MinWindowSubstring();




//////////////////////////////////////



//10. Check if a number is even
// myFunction(10);
// Expected;
// true;
// myFunction(-4);
// Expected;

function myFunction(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const results = myFunction(10);
console.log(results)


///////////////////////////////////



//11. How many times does a character occur ?
// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

// myFunction("m", "How many times does the character occur in this sentence?");
// Expected;
// 2;
// myFunction("h", "How many times does the character occur in this sentence?");
// Expected;
// 4;


const characterCount = (letter, str) => {
	let letterCount = 0;
	for (let i = 0; i < str.length; i++){
		if (str.charAt(i) == letter) {
			letterCount += 1;
		}
	}
	return letterCount;
}
console.log(characterCount("m", "How many times does the character occur in this sentence?"));


//////////////////////////////////////////////



//12. Check if a number is a whole number
// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false


// myFunction(4);
// Expected;
// true;
// myFunction(1048);
// Expected;
// true;
// myFunction(10.48);
// Expected;
// false;


const wholeNumber = (num) => {
	let result = (num - Math.floor(num)) == 0;

	if (result) {
		return true;
	} else {
		return false;
	}
		
}

console.log(wholeNumber(10));


////////////////////////////////////////////////////


// 13. Multiplication, division, and comparison operators
// Write a function that takes two numbers, say a and b, as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// Test Cases:
// myFunction(10, 100)
// Expected
// 0.1
// myFunction(90, 45)
// Expected
// 4050


const divisionMultipicationFunction = (num1, num2) => {
	if (num1 < num2) {
		return result1 = num1 / num2;
	} else {
		return result2 = num1 * num2;
	}
}
console.log(divisionMultipicationFunction(90, 45));


// //////////////////////////////////////////
//15.
const stringFunction = (word1, word2) => {
	if (word1 > word2) {
		return word1 + word2;
	} else {
		return word2 + word1;
}
}
console.log(stringFunction(" think, therefore I am", "I"));

// ///////////////////////////////////////////

// 16. Split a number into its digits
// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

// Test Cases:
// myFunction(931)
// Expected
// [9,3,1]
// myFunction(193278)
// Expected
// [1,9,3,2,7,8]


const myFunction = (num) => {
    return numbers = [...String(num)].map(Number);
}
console.log(myFunction(193278));


// or

const numberTostring = (numbers) => {
  let array = numbers.toString().split(""); //stringify the number, then make each digit an item in an array
 return array.map((num) => parseInt(num)); //convert all the items back into numbers
};
//use the function
console.log(numberTostring(193278));

// The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN



// //////////////////////////////////////////////////


// 17. Clear up the chaos behind these strings
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

// Test Cases:
// myFunction('java', 'tpi%rcs')
// Expected
// 'Javascript'
// myFunction('c%ountry', 'edis')
// Expected
// 'Countryside'
// myFunction('down', 'nw%ot')
// Expected
// 'Downtown'

const addToString = (str1, str2) => {
  const string2 = str2.split('').reverse().join('').replace('%', '');
  const relt = str1.replace('%', '');
  // const string2 = str2.replace("%", "").reverse('');
  return result = relt + string2;
}
console.log(addToString("java", "tpi%rcs"));


// /////////////////////////////////////////


// 18. Return the next higher prime number
// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

// Test Cases:
// myFunction(38)
// Expected
// 41
// myFunction(7)
// Expected
// 7
// myFunction(115)
// Expected
// 127
// myFunction(2000)
// Expected
// 2003

// write a program to check if a given number is prime or not javascript
// program to check if a number is prime or not

const findDivisibleNumber = (number, divider) => {
  while (number % divider !== 0) {
    number++;
  }
  return number;
}
const result = findDivisibleNumber(7, 3);
console.log(result);


//////////////////////////////////////////