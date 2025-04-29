// 1. Паліндром з ігноруванням пробілів і регістру
// Опис:
// Напиши функцію isPalindrome(str), яка ігнорує пробіли, великі/малі букви та спецсимволи.

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const isPalindrome = (str) => {
  if (str.trim() === "") {
    return "Please enter something!";
  }

  const correctedStr = str
    .toLowerCase()
    .split("")
    .filter((el) => alphabet.includes(el))
    .join("");

  //* First method
  // const strLength = correctedStr.length;
  // const firstPart = correctedStr.slice(0, Math.ceil(strLength / 2) - 1);
  // const secondPart = correctedStr.slice(Math.ceil(strLength / 2), str.length);

  // if (firstPart === secondPart.split("").reverse().join("")) {
  //   return true;
  // } else {
  //   return false;
  // }

  //* Second method
  const inversedStr = correctedStr.split("").reverse().join("");
  if (correctedStr === inversedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man& a plan ( * $   a canal Pana&ma"));
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("  "));
