//TODO: Check If a String is Palindrome or Not

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const checkPalindrome = (str) => {
  const fixedStr = str
    .toLowerCase()
    .split("")
    .filter((el) => alphabet.includes(el))
    .join("");

  const reversedStr = fixedStr.split("").reverse().join("");
  if (fixedStr === reversedStr) {
    return `String "${str}" is a palindrome!`;
  } else {
    return `String "${str}" is NOT a palindrome!`;
  }
};

console.log(checkPalindrome("banana"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("A man& a plan ( * $   a canal Pana&ma"));
