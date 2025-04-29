// 2. Підрахунок частоти елементів у масиві
// Опис:
// Створи функцію countElements(arr), яка рахує скільки разів кожен елемент зустрічається в масиві.

const countElements = (dataArr) => {
  const resultObj = {};

  dataArr.forEach((element) => {
    if (!Object.keys(resultObj).includes(element)) {
      resultObj[element] = 1;
    } else {
      resultObj[element] += 1;
    }
  });

  return resultObj;
};

console.log(
  countElements(["apple", "orange", "orange", "banana", "apple", "orange"])
);
// { apple: 2, banana: 1 }
