// 2. Пошук найбільшого числа
// Напиши функцію findMax, яка знаходить найбільше число в масиві.

function findMax(numbers) {
  const result = numbers.reduce((maxNum, num) => {
    if (num > maxNum) {
      maxNum = num;
    }

    return maxNum;
  }, 0);

  return result;
}

console.log(findMax([2, 8, 15, 1, 9]));
