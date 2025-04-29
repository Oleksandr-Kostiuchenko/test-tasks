// 4. Фільтрація парних чисел
// Напиши функцію filterEvenNumbers, яка повертає новий масив лише з парними числами.

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([2, 9, 3, 10, 242, 7, 8]));
