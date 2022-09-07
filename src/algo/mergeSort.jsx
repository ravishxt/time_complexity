import React, { useEffect } from "react";

const mergeSort = (props) => {
    const { iteration, onExecutionCompletion } = props;

    const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

    const inputSize = Array();
    const timeTaken = Array();

    // Algo Function
    const merge = (left, right) => {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    }

    const mergeSort = (array) => {
        const half = array.length / 2
        
        // Base case or terminating case
        if(array.length < 2){
          return array 
        }
        
        const left = array.splice(0, half)
        return merge(mergeSort(left),mergeSort(array))
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
        mergeSort(arr)
        const duration = performance.now() - start;
        timeTaken.push(duration)
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

export default mergeSort;