// 1. Сума чисел у масиві
// Напиши функцію sumArray, яка приймає масив чисел і повертає їхню суму.

function sumArray(numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
}

console.log(sumArray([2, 10]));
