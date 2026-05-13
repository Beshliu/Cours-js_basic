
const arr = [3, 6, 9, 2];

function moreThenFive (number) {
  return number > 5;
}

function delNumber (arreyOfNumbers, comperisonFun) {
  let newArr = [];
  for (let i =  0; i < arreyOfNumbers.length; i++) {
    if (!comperisonFun(arreyOfNumbers[i])) {
      newArr.push(arreyOfNumbers[i]);
    }
  }
  return newArr;
}
console.log(delNumber(arr, moreThenFive));