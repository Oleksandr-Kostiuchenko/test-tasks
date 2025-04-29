//TODO: Рекурсія
// 1. ===========================================

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// 2. ===========================================
// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   }

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(6));

// 3. ===========================================
// function sumNums(arr, sum = 0) {
//   if (arr.length === 0) {
//     return sum;
//   }

//   const firstNum = arr[0];

//   if (Array.isArray(firstNum)) {
//     sum += sumNums(firstNum);
//   } else {
//     sum += Number(firstNum);
//   }

//   return sumNums(arr.slice(1, arr.length), sum);
// }

// console.log(sumNums([2, 5, 10, [1, 6, [[[[7]]]]]]));
// 4. ===========================================

// function reverseString(str, arrStr = str.split(""), result = []) {
//   if (result.length === str.length) {
//     return result.join("");
//   }

//   result.push(arrStr[arrStr.length - 1]);
//   arrStr.pop();
//   return reverseString(str, arrStr, result);
// }

// console.log(reverseString("hello"));
// console.log(reverseString("abc"));

// 5. ===========================================
// function sumTo(num, sum = 0) {
//   if (num === 0) {
//     return sum;
//   }

//   sum += num;
//   return sumTo(num - 1, sum);
// }

// console.log(sumTo(5));
// 6. ===========================================
// const findMax = (numArr) => {
//   let maxNum = 0;

//   for (let i = 0; i <= numArr.length; i++) {
//     if (numArr[i] > maxNum) {
//       maxNum = numArr[i];
//     }
//   }

//   return maxNum;
// };

// console.log(findMax([3, 7, 2, 9, 5]));
// 7. ===========================================
// const isEmail = (str) => {
//   const regex = /@.+\./;

//   return regex.test(str);
// };

// console.log(isEmail("test@gmail.com"));
// 8. ===========================================
// const startsWithDigit = (str) => {
//   const regex = /^\d/;

//   return regex.test(str);
// };

// console.log(startsWithDigit("7days"));
// console.log(startsWithDigit("days7"));
// 9. ===========================================

// const removeSpaces = (str) => {
//   return str.replace(/\s/g, "");
// };

// console.log(removeSpaces("a b c d"));
// console.log(removeSpaces("  hello   world "));
