// Перевірка на паліндром
// Напиши функцію isPalindrome, яка перевіряє, чи є рядок паліндромом.

function isPalindrome(str) {
  const strLength = str.length;
  const firstPart = str.slice(0, Math.ceil(strLength / 2) - 1);
  const secondPart = str.slice(Math.ceil(strLength / 2), strLength);

  if (firstPart === secondPart.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("amanaplanacanalpanama"));
