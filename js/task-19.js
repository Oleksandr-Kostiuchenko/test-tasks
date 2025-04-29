// Напиши функцію reverseString(str), яка повертає рядок у зворотному порядку, використовуючи рекурсію

// function reverseString(str, result = []) {
//   const ArrStr = str.split("");

//   if (ArrStr.length === 0) {
//     return result.join("");
//   }

//   result.push(ArrStr[ArrStr.length - 1]);
//   ArrStr.pop();
//   return reverseString(ArrStr.join(""), result);
// }

// console.log(reverseString("hello"));

// Напиши функцію sumTo(n), яка повертає суму всіх чисел від 1 до n включно, використовуючи цикл.
// const sumTo = (num) => {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// };

// console.log(sumTo(5));

// Напиши функцію isPhoneNumber(str), яка перевіряє, чи рядок має формат номера +380XXXXXXXXX.
const isPhoneNumber = (str) => {
  const regex = /

  return regex.test(str);
};
