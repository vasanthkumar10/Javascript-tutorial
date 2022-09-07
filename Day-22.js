// Merge Sort

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  //   console.log(left.slice(leftIndex), right.slice(rightIndex));
  // result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  if (leftIndex < left.length) {
    for (let i = leftIndex; i < left.length; i++) {
      result.push(left[i]);
    }
  }
  if (rightIndex < right.length) {
    for (let i = rightIndex; i < right.length; i++) {
      result.push(right[i]);
    }
  }
  //   console.log(result);
  return result;
}

// console.log(merge([2, 4, 5, 6], [1, 3, 7, 8]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2, 1, 7, 6, 8, 5, 3, 4, 9]));
