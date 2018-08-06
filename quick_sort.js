function quick_sort(array, left, right) {
  if(left < right) {
    let partitionIndex = partition(array, left, right);

    quick_sort(array, left, partitionIndex - 1);
    quick_sort(array, partitionIndex + 1, right);

    return array;
  }
}

function partition(array, left, right) {
  let pivotValue = array[right];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, indexA, indexB) {
  let a = array[indexA];
  let b = array[indexB];

  array[indexA] = b;
  array[indexB] = a;
}

let unsorted = [32,66,1,2,98,55,23,45];
console.log('unsorted', unsorted);
console.log('sorted', quick_sort(unsorted, 0, unsorted.length-1));