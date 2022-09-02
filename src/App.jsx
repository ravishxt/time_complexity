import { useState, useEffect } from "react";
import Form from "./components/Form";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import RiseLoader from "react-spinners/ClipLoader";
import AlgoDecider from "./components/AlgoDecider";

function App() {
  const [formData, setFormData] = useState({
    algo: "Bubble Sort",
    iteration: 4,
  });

  let dataToRender = {
    algoName: "",
    inputSize: [],
    timeTaken: [],
  };

  const formSubmitHandler = (enteredFormData) => {
    setFormData({
      algo: enteredFormData.algo,
      iteration: enteredFormData.iteration,
    });
  };

  const completionHandler = (dataToSend) => {
    dataToRender.algoName = dataToSend.algoName;
    dataToRender.inputSize = dataToSend.inputSize;
    dataToRender.timeTaken = dataToSend.timeTaken;
  };

  return (
    <div className="App">
      <Navbar />
      <main className="container mx-auto flex items-center justify-between h-[830px]">
        <Form onSubmit={formSubmitHandler} />
        <AlgoDecider formData={formData} onCompletion={completionHandler} />
        <Chart dataToRender={dataToRender} />
      </main>
    </div>
  );
}

export default App;
