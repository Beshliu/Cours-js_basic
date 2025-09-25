const arr = [1, 40, -5, 10, 0];


function sort(allNumbers) {
  let newArr = [];

  while (allNumbers.length > 0) {
    let minNumber = 0;
    for (let i = 1; i < allNumbers.length; i++) {
      if (allNumbers[i] < allNumbers[minNumber]) {
        minNumber = i;
      }
    }
    const del = allNumbers.splice(minNumber, 1)[0];
    newArr.push(del);
  }
  return newArr;
}

console.log(sort(arr));


