import React, { useState } from "react";

const form = (props) => {
  const [algo, setAlgo] = useState("Bubble Sort");
  const [iteration, setIteration] = useState("4");

  const algoChangeHandler = (e) => {
    setAlgo(e.target.value);
  };

  const iterationChangeHandler = (e) => {
    setIteration(e.target.value);
    // console.log(iteration);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      algo: algo,
      iteration: iteration,
    };
    props.onSubmit(formData);
    // console.log(formData);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="max-w-sm container">
        <div className="sm:flex md:items-center items-center mb-6">
          <div className="sm:w-1/3 md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 mr-16 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Algorithm
            </label>
          </div>
          <div className="sm:w-2/3 md:w-2/3">
            <select
              className="cursor-pointer block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="algo"
              onChange={algoChangeHandler}
              value={algo}
            >
              <option value="Bubble Sort">Bubble Sort</option>
              <option value="Heap Sort">Heap Sort</option>
              <option value="Insertion Sort">Insertion Sort</option>
              <option value="Merge Sort">Merge Sort</option>
              <option value="Counting Sort">Counting Sort</option>
              <option value="Radix Sort">Radix Sort</option>
              <option value="Selection Sort">Selection Sort</option>
              <option value="Quick Sort">Quick Sort</option>
              <option value="Quick Sort & Binary Search">Quick Sort & Binary Search</option>
              <option value="Bubble Sort & Binary Search">Bubble Sort & Binary Search</option>
              <option value="Insertion Sort & Linear Search">Insertion Sort & Linear Search</option>
              <option value="Find Max">Find Max in an array</option>
            </select>
          </div>
        </div>
        {/* md:flex md:items-center mb-6 */}
        <div className="sm:flex md:items-center mb-6">
          <div className="sm:w-1/3 md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              No. of iterations
            </label>
          </div>
          <div className="sm:w-2/3 md:w-2/3">
            <select
              className="cursor-pointer block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={iterationChangeHandler}
              value={iteration}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>

        <div className="sm:flex md:items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <div className="flex space-x-2 justify-start">
              <button
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Compute
              </button>
            </div>
          </div>
        </div>

        {/* <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div> */}

        
      </form>
    </div>
  );
};

export default form;
