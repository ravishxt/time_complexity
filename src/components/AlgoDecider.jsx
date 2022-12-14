import React, { useEffect, useState } from "react";
import BubbleSort from "../algo/bubbleSort";
import HeapSort from "../algo/heapSort";
import MergeSort from "../algo/mergeSort";
import CountingSort from "../algo/countingSort";
import RadixSort from "../algo/radixSort";
import SelectionSort from "../algo/selectionSort";
import QuickSort from "../algo/quickSort";
import QuickSortBinarySearch from "../algo/quickSortBinarySearch";
import BubbleSortBinarySearch from "../algo/bubbleSortBinarySearch";
import InsertionSortLinearSearch from "../algo/insertionSortLinearSearch";
import FindMax from "../algo/findMax";
import InsertionSort from "../algo/insertionSort";

const AlgoDecider = (props) => {
  const {
    formData: { algo, iteration },
    onCompletion,
  } = props;

  let dataToSend = {
    algoName: algo,
    inputSize: [],
    timeTaken: [],
  };

  const executionCompletionHandler = (computedData) => {
    dataToSend.inputSize = computedData.inputSize;
    dataToSend.timeTaken = computedData.timeTaken;
  };

  const algoSelect = () => {
    switch (algo) {
      case "Bubble Sort":
        return (
          <BubbleSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Heap Sort":
        return (
          <HeapSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Insertion Sort":
        return (
          <InsertionSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Merge Sort":
        return (
          <MergeSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Counting Sort":
        return (
          <CountingSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Radix Sort":
        return (
          <RadixSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Selection Sort":
        return (
          <SelectionSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Quick Sort":
        return (
          <QuickSort
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Quick Sort & Binary Search":
        return (
          <QuickSortBinarySearch
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Bubble Sort & Binary Search":
        return (
          <BubbleSortBinarySearch
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Insertion Sort & Linear Search":
        return (
          <InsertionSortLinearSearch
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      case "Find Max":
        return (
          <FindMax
            iteration={iteration}
            onExecutionCompletion={executionCompletionHandler}
          />
        );
      default:
        break;
    }
  };
  useEffect(() => {
    onCompletion(dataToSend);
  }, [dataToSend]);
  return <div>{algoSelect()}</div>;
};

export default AlgoDecider;
