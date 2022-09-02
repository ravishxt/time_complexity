import React, { useEffect } from "react";

const findMax = (props) => {
    const { iteration, onExecutionCompletion } = props;

    const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

    const inputSize = Array();
    const timeTaken = Array();

    // Algo Function
    const findMax = (array) => {
        let max;
        let counter = 0;
      
        for (let i = 0; i < array.length; i++) {
          counter++;
          if(max === undefined || max < array[i]) {
            max = array[i];
          }
        }
        // console.log(max);
    }

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
        findMax(arr)
        const duration = performance.now() - start;
        timeTaken.push(duration)
    }

    const computedData = {
        inputSize: inputSize,
        timeTaken: timeTaken,
    };

    useEffect(() => {
        onExecutionCompletion(computedData);
        // console.log(timeTaken);
    }, [computedData]);

    return <div></div>;
};

export default findMax;