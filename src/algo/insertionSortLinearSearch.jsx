import React, { useEffect } from "react";

const insertionSortLinearSearch = (props) => {
    const { iteration, onExecutionCompletion } = props;

    const n = [10, 100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000];

    const inputSize = Array();
    const timeTaken = Array();

    // Algo Function
    const insertionSort = (inputArr) => {
        let n = inputArr.length;
            for (let i = 1; i < n; i++) {
                // Choosing the first element in our unsorted subarray
                let current = inputArr[i];
                // The last element of our sorted subarray
                let j = i-1; 
                while ((j > -1) && (current < inputArr[j])) {
                    inputArr[j+1] = inputArr[j];
                    j--;
                }
                inputArr[j+1] = current;
            }
        return inputArr;
    }

    const linearSearch = (array, x) => {
        let sortedArray = insertionSort(array);
        for(let i = 0; i < sortedArray.length; i++){
            if(sortedArray[i] === x){
                return i
            }
        }
        return -1
    }

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
        if (linearSearch(arr, number)) {
          console.log("Found !");
        } else console.log("Not Found !");
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

export default insertionSortLinearSearch;