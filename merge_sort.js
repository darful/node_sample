function merge_sort(array) {
  let arraySize = array.length;

  if(arraySize === 1) {
    return;
  }

  let midpoint = Math.floor(array.length/2);
  let leftArray = array.slice(0, midpoint);
  let rightArray = array.slice(midpoint);

  merge_sort(leftArray);
  merge_sort(rightArray);

  merge(leftArray, rightArray, array);

  return array;
}

function merge(leftArray, rightArray, array) {
  let index = 0;

  while(leftArray.length > 0 && rightArray.length > 0) {
    if(rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }

  while (leftArray.length) {
    array[index++] = leftArray.shift();
  }

  while (rightArray.length) {
    array[index++] = rightArray.shift();
  }
}

let unsorted = [32,66,1,2,98,55,23,45];
console.log('unsorted', unsorted);
console.log('sorted', merge_sort(unsorted));

