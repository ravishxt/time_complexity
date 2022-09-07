import React, { useEffect } from "react";

const radixSort = (props) => {
  const { iteration, onExecutionCompletion } = props;

  const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

  const inputSize = Array();
  const timeTaken = Array();

  // Algo Function
  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  };

  const radixSort = (arrOfNums) => {
    let maxDigitCount = mostDigits(arrOfNums);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []); // [[], [], [],...]
      for (let i = 0; i < arrOfNums.length; i++) {
        let digit = getDigit(arrOfNums[i], k);
        digitBuckets[digit].push(arrOfNums[i]);
      }
      // New order after each loop
      arrOfNums = [].concat(...digitBuckets);
    }
    return arrOfNums;
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
    radixSort(arr);
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

export default radixSort;
