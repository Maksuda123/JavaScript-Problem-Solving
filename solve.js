//1. Factorial

function firstFactorial(num) {

  return num === 1 ? 1 : num * firstFactorial(num - 1);
}

console.log(firstFactorial(5));


//2. reverse string

function reverseString(str) {
    return str.split('').reverse().join('');
    
}

console.log(reverseString('Maksuda Mila'))



//Array reverse
const array1 = ["one", "two", "three"];
const reversed = array1.reverse();
console.log("reversed:", reversed);
//output: reversed:['three', 'two', 'one']



//string split
const str = "How are you";
const stringSplit = str.split('').reverse('').join('');
console.log(stringSplit);
//output: uoy era woH



//2. reverse string way No 2.
function firstReverse(str) {
    const reverseArray = [];
    for (i = str.length - 1; i > -1; i--){
        reverseArray.push(str[i]);
    }
    str = reverseArray.join('');
    return str;
}
console.log(firstReverse("Maksuda Mila"));



//3. user name Validation

function usernameValidation(str) {
    const regExpression = /^[a-zA-Z]\w+[A-Za-z0-9]$/;

    const length = (str) => str.length >= 4 && str.length <= 25;
    return regExpression.test(str) && length(str);

}

console.log(usernameValidation("u__hello_world123"));
//output: true



//4. Factorial
function factorial(n) {
    return n === 1 ? 1 : factorial(n - 1);
}

const fact = factorial(4);
console.log(fact);



//5. BracketCombibation

function bracketCombibation(num) {
    let factorial = (n) => {
        let k = 1;
        for(var i = n; i >= 1; i--){
            k *= i;
        }
        return k;
        
    }
    const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
    return result;
}
const finalResult = bracketCombibation(5)
console.log(finalResult);




// Find Intersection 
function FindIntersection(strArr) {
  const arrayOne = strArr[0].split(", ");
  const arrayTwo = strArr[1].split(", ");
    let result = arrayOne.filter((arrTwo) => arrayTwo.find((arrOne) => arrOne === arrTwo))
    return result.length > 0 ? result.join(',') : 'false';
}


const myArray = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log(myArray);
const finalResult = FindIntersection(["1, 3, 5, 10, 17, 18", "2, 4, 9, 4"]);
console.log(finalResult);
//output: False