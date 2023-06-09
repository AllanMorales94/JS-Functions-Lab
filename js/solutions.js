// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (x, y, z) {
if (x > y) {
  if (x > z) {
    return x;
  } else {
    return z;
  }
} else {
  if (y > z) {
    return y;
  } else {
    return z;
  }
}
};

// if(x >= y && x >= z){
//   return x;
// }else if(y >= x && y >= z){
//   return y;
// }else{
//   return z;
// };

console.log(maxOfThree(3, 9, 10));

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  char = char.toLowerCase();
  return('aeiouy'.indexOf(char) > -1);
}

console.log(isCharAVowel('a'));

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(array) {
let sum = 0;
for(let i = 0; i < array.length; i++) {
  sum += array[i];
}
return sum;
}

console.log(sumArray([10, 10, 10]));

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(array) {
  let mult = 1;
  for(let i = 0; i < array.length; i++) {
    mult *= array[i];
  }
  return mult;
}

console.log(multiplyArray([5, 5, 5]));

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function() {
  return arguments.length;
}

console.log(numArgs(1, 2, 3, 4, 5, 6, 7));

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(string) {
  return string.split('').reverse().join('')

}

console.log(reverseString('rockstar'))

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(array) {
let longest = 0;
array.forEach(function(a) {
  if (a.length > longest) longest = a.length;
})
return longest;
};

console.log(longestStringInArray(['hey', 'mayo', 'and', 'the', 'backend']));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(array, len) {
  return array.filter(function(a) {
    return (a.length > len);
  });
};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
