import { useState, useEffect } from "react";
import Form from "./components/Form";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import AlgoDecider from "./components/AlgoDecider";

const App = () => {
  const [formData, setFormData] = useState({
    algo: "Bubble Sort",
    iteration: 4,
  });

  let dataToRender = {
    algoName: "",
    inputSize: [],
    timeTaken: [],
  };

  let [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = (enteredFormData) => {
    setFormData({
      algo: enteredFormData.algo,
      iteration: enteredFormData.iteration,
    });
    setIsLoading(false);
  };

  const completionHandler = (dataToSend) => {
    dataToRender.algoName = dataToSend.algoName;
    dataToRender.inputSize = dataToSend.inputSize;
    dataToRender.timeTaken = dataToSend.timeTaken;
    setIsLoading(true);
  };

  const DisplayChart = () => {
    return <Chart dataToRender={dataToRender} />;
  };

  const DisplayLoader = () => {
    return <Loader />;
  };

  const Test = (props) => {
    if (props.loading) {
      return <DisplayChart />;
    } else return <DisplayLoader />;
  };

  return (
    <div className="App">
      <Navbar />
      <main className="container px-20 mx-auto mt-8 flex items-center justify-between flex-col lg:flex-row h-full">
        <Form onSubmit={formSubmitHandler} />
        <AlgoDecider formData={formData} onCompletion={completionHandler} />
        <Test loading={isLoading} />
      </main>
    </div>
  );
};

export default App;
