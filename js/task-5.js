// 5. Підрахунок голосних у рядку
// Напиши функцію countVowels, яка підраховує кількість голосних у рядку.

function countVowels(str) {
  const lettersArr = str.toLowerCase().split("");

  const result = lettersArr.reduce((count, letter) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "y" ||
      letter === "u" ||
      letter === "i" ||
      letter === "o"
    ) {
      count += 1;
    }

    return count;
  }, 0);

  return result;
}

console.log(countVowels("Alex"));
