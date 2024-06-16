/*
let array = [10, 20, 30];

array.splice(array.length - 1, 1, 99);
console.log(array);

function getLastValue (array) {
  const lastIndex = array.length - 1;
  console.log(array[lastIndex]);
}

getLastValue(array);

function arraySwap (array) {
  const lastIndex = array[array.length - 1];
  const firstIndex = array[0];
  array.splice(0, 1, lastIndex);
  array.splice(array.length - 1, 1, firstIndex);
  console.log(array)
}

arraySwap(['pajdo', 'oaid', 'doapijd', 'mama']);

for (i = 0; i <= 10; i+= 2) {
  console.log(i)
}

for (i = 5; i >= 0; i--) {
  console.log(i)
}

i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}


i = 5;

while (i >= 0) {
  console.log(i);
  i--;
}



function increaseByOne(array) {
  newArray = [];
  for (i = 0; i < array.length; i++){
  newArray.push(array[i] + 1);
  }
  console.log(newArray);
}

increaseByOne([1, 2, 3, 99]);


function addNum(array, num) {
  newArray = [];
  for (i = 0; i < array.length; i++){
  newArray.push(array[i] + num);
  }
  console.log(newArray);
}

addNum([1, 2, 3], 1);


function addArrays(array1, array2) {
  newArray = [];
  for (i = 0; i < array1.length; i++){
  newArray.push(array1[i] + array2[i]);
  }
  console.log(newArray);
}

addArrays([1,2,3], [1,2,3]);


function countPositive (array) {
  count = '';
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  console.log(count);
}

countPositive([-5, -5, 1, 2, 4]);


function minMax (number) {
  const result = {
    min: null,
    max: null
  }

  for (i = 0; i < number.length; i++) {
    const value = number[i];

    if (result.min === null || value < result.min) {
      result.min = value;
    }

    if (result.max === null || value > result.max) {
      result.max = value;
    }

  } return result;
}
  
console.log(minMax([1,2,3,4]));
*/

function countWords (words) {
  const result = {};

  for ( i = 0; i < words.length; i++) {
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  } return result;
}

console.log(countWords(['mama', 'mama', 'tata']));


