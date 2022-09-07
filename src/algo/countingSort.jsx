import React, { useEffect } from "react";

const countingSort = (props) => {
  const { iteration, onExecutionCompletion } = props;

  const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

  const inputSize = Array();
  const timeTaken = Array();

  // Algo Function
  const findMaximum = (arr) =>
    arr.reduce((acc, val) => (val > acc ? val : acc), Number.MIN_VALUE);
  const countingSort = (arr) => {
    const max = findMaximum(arr);
    const counts = new Array(max + 1);
    counts.fill(0);
    arr.forEach((value) => counts[value]++);
    const res = [];
    let resultIndex = 0;
    counts.forEach((count, index) => {
        for (let i = 0; i < count; i++) {
            res[resultIndex] = index;
            resultIndex++;
        }
    });
    // console.log(res);
    return res;
  };

  // Running  acc. to the number of iterations
  for (let i = 0; i < iteration; i++) {
    let arr = Array();

    // Initializing the input array
    for (let j = 0; j < n[i]; j++) {
      arr.push(1 + Math.floor(Math.random() * 10000));
    }

    inputSize.push(n[i]);
    const start = performance.now();
    // Function Call
    countingSort(arr)
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

export default countingSort;
