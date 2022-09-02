import React, { useEffect } from "react";

const quickSort = (props) => {
  const { iteration, onExecutionCompletion } = props;

  const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

  const inputSize = Array();
  const timeTaken = Array();

  // Algo Function
  const quickSort = (origArray) => {
    if (origArray.length <= 1) {
      return origArray;
    } else {
      var left = [];
      var right = [];
      var newArray = [];
      var pivot = origArray.pop();
      var length = origArray.length;

      for (var i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
          left.push(origArray[i]);
        } else {
          right.push(origArray[i]);
        }
      }

      return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
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
    quickSort(arr);
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

export default quickSort;
