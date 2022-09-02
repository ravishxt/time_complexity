import React, { useEffect } from "react";

const selectionSort = (props) => {
  const { iteration, onExecutionCompletion } = props;

  const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

  const inputSize = Array();
  const timeTaken = Array();

  // Algo Function
  const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (min != i) {
        // Swapping the elements
        let tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
      }
    }
    // console.log(array);
  };

  // Running  acc. to the number of iterations
  for (let i = 0; i < iteration; i++) {
    let arr = Array();

    // Initializing the input array
    for (let j = 0; j < n[i]; j++) {
      arr.push(1 + Math.floor(Math.random() * 100));
    }

    inputSize.push(n[i]);
    const start = performance.now();
    // Function Call
    selectionSort(arr);
    const duration = performance.now() - start;
    timeTaken.push(duration);
  }

  const computedData = {
    inputSize: inputSize,
    timeTaken: timeTaken,
  };

  useEffect(() => {
    onExecutionCompletion(computedData);
    console.log(timeTaken);
  }, [computedData]);

  return <div></div>;
};

export default selectionSort;
