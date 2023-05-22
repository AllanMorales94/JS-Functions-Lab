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