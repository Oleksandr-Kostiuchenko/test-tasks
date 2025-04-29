//TODO: Remove Duplicates From an Array
// Removing duplicates from an array is one of the commonly asked coding questions in a JavaScript interview. In this question, the interview may give an array that consists of multiple values and some of them occur more than once. The task is to remove those duplicate values. For example, the following can be the input.

const removeDuplicates = (numArr) => {
  const result = [];

  numArr.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
};

let arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];
console.log(removeDuplicates(arr));
