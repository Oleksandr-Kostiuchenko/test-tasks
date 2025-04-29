// 4. Рекурсивний підрахунок суми чисел
// Опис:
// Напиши функцію sumNumbers(arr), яка рекурсивно підраховує суму чисел у масиві будь-якої вкладеності.

const sumNumbers = (...args) => {
  let sum = 0;
  const numArr = args.join("").split(",");

  numArr.forEach((num) => (sum += Number(num)));

  return sum;
};

console.log(
  sumNumbers([[[[[[[1, [9, 6], 4]]]]]], 1, 2, [3, 4, [5, [[[10]]]]]])
);
