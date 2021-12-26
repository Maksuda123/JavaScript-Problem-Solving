//1.Chokka rsndomly print
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomNumber(1, 6));


//2.Name print Alphabetically
const names = ['Mila', 'Shila', 'Nila'];
console.log(names.sort());
//aray.sort main array k change kore fele.


//3.Number serially Shajabo
const numbers = [1, 4, 2, 9, 5, 3, 8];

const result = numbers.sort((a, b) => a - b);
console.log(result);


//4. Leap Year ki na ber koro?
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year!`);
    } else {
        console.log(`${year} is not a leap year`)
    }
}
isLeapYear(2028)



//5. Kono sentence a vowel ache koto gulo ber koro

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", 'U'];
function findVowel(sentance) {
    let count = 0;
    const letters = Array.from(sentance);//array banalam
    letters.forEach(function(value) {
        if (vowels.includes(value)) {
            count++;
        }
    })
    return count;
}
console.log(findVowel("Hello I am Mila!"))



//6. Ekta array theke duplicate value gula bar kore anbo.

const numbers = [1, 1, 2, 3, 4, 6, 6, 2];
const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
})//indexof prothom index pai shob shomoi
console.log(duplicates);



//7. Ekta array theke unique value gula bar kore anbo.
const numbers = [1, 1, 2, 3, 4, 6, 6, 2];
const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) === index;
})//indexof prothom index pai shob shomoi
console.log(duplicates);


//8. Ekta boro sentance theke 'sumit' shobdo ti koto ase ber koro. Prothom bar Saha koto number position a ase?
const sentence = "Sumit Saha is a Tech Entrepreneur who Founded Analyzen - the first ever Digital Agency in Bangladesh. He is specialized in Full Stack Web Development.  Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";


const matches = sentence.match(/sumit/ig);
const occurances = matches ? matches.length : 0;
console.log(occurances);

let position = sentence.search(/sumit/i);
position >= 0 ? position : 'Not found';
console.log(position);


//9. input linearSearch(['a', 'b', 'c', 'd', 'e' ], 'c')
//output: 2 or 'Not found'
const linearSearch = (arr, val) => {
    let length = arr.length;
    for (i = 0; i <= length; i++){
        if (arr[i] === val) {
            return i;
        }
    }
    return 'Not found';
}
const result = linearSearch(["a", "b", "c", "d", "e"], "c");

console.log(result);



//10. Kono array theke shob theke boro string khuje ber koro & tar index number dekhaw.
const longestString = (array) => {
    let longestWord = '';

    for (element of array) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return [ longestWord, array.indexOf(longestWord)];
}

const result = longestString(['Sumit Saha', 'Learn with Sumit', 'Maksuda Mila'])
console.log(result);


//11. 1-100 porjonto value gulo 3 or 5 abong 3, 5 ovoi value dhara bibajjo ki na?

function fixxBuzz(number) {
    for (let i = 1; i <= number; i++){
        if (i % 15 === 0) {
          console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
          console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
          console.log(`${i} is Buzz`);
        }
    }
}

console.log(fixxBuzz(100))



//12. Array theke falsy value khuje bad dibo.
const mixdArray = [
    'lws',
    undefined,
    'learn with sumit',
    false,
    "",
    'apple',
    40,
    "k",
    true,
    "Thanks All",
    NaN
];

const trueArray = mixdArray.filter((el) => {
    if (el) {
        return true;
    } else {
        return false;
    }
})
console.log(trueArray)

//or
const trueArray = mixdArray.filter(Boolean);
console.log(trueArray);


//13. Object theke falsy value baad dibo.
const obj = {
   a:'lws',
   b: undefined,
   c: 'learn with sumit',
   d: false,
   e: "",
   f: 'apple',
   g: 40,
   h: "k",
   i: true,
   j: "Thanks All",
   k: NaN
}

const trueValue = (obj) => {
    for (element in obj) {
      if (!obj[element]) {
        delete obj[element]
      } 
    }
    return obj;
}

console.log(trueValue(obj))
