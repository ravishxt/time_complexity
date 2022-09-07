import React, { useEffect } from "react";

const bubbleSortBinarySearch = (props) => {
  const { iteration, onExecutionCompletion } = props;

  const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

  const inputSize = Array();
  const timeTaken = Array();

  // Algo Function
  const bblSort = (arr) => {
    // Bubble Sort logic
    for (var i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (var j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

  const binarySearch = (array, x) => {
    let sortedArray = bblSort(array);
    // console.log(sortedArray);
    let start = 0;
    let end = array.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);

      // If element is present at mid, return True
      if (sortedArray[mid] === x) return true;
      // Else look in left or right half accordingly
      else if (sortedArray[mid] < x) start = mid + 1;
      else end = mid - 1;
    }
    return false;
  };

  // Running  acc. to the number of iterations
  for (let i = 0; i < iteration; i++) {
    let arr = Array();

    // Initializing the input array
    for (let j = 0; j < n[i]; j++) {
      arr.push(1 + Math.floor(Math.random() * 100));
    }

    inputSize.push(n[i]);
    let number = 1 + Math.floor(Math.random() * 100);
    console.log(number);
    const start = performance.now();
    // Function Call
    if (binarySearch(arr, number)) {
      console.log("Found !");
    } else console.log("Not Found !");
    const duration = performance.now() - start;
    timeTaken.push(duration);
  }

  const computedData = {
    inputSize: inputSize,
    timeTaken: timeTaken,
  };

  useEffect(() => {
    onExecutionCompletion(computedData);
  }, [computedData]);

  return <div></div>;
};

export default bubbleSortBinarySearch;
