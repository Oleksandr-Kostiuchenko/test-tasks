// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real

const transformStr = (str) => {
  const strArr = str.split(" ");

  const resultArr = strArr.map(
    (el) => `${el[0].toUpperCase()}${el.slice(1, el.length)}`
  );

  return resultArr.join(" ");
};

console.log(transformStr("How can mirrors be real if our eyes aren't real"));

console.log([1, 2, 3] + [4, 5, 6]);
