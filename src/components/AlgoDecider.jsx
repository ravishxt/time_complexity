import React, { useEffect, useState } from "react";
import BubbleSort from "../algo/bubbleSort";
import SelectionSort from "../algo/selectionSort";
import QuickSort from "../algo/quickSort";
import BinarySearch from "../algo/binarySearch";
import FindMax from "../algo/findMax";

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
      case "Binary Search":
        return (
          <BinarySearch
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
