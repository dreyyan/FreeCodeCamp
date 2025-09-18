import { useState } from "react";
import NumberButton from "./components/NumberButton";;
import OperationButton from "./components/OperationButton";
import UtilityButton from "./components/UtilityButton";

const App = () => {
  const [display, setDisplay] = useState("");

  return (
    <div className="border-4 h-screen flex justify-center items-center">
      {/* Calculator */}
      <div className="border-2 flex flex-col px-[2%] py-[4%] rounded-2xl">
        {/* Display */}
        <div className="border flex justify-end items-end w-full h-16 rounded-md mt-[2%] mb-[8%] pr-[4%] pb-[1%]">
          <p id="display" className="text-black volkhov-bold text-4xl">{display}</p>
        </div>

        <div className="flex">
          {/* BUTTONS: Numbers */}
          <div id="number-buttons-container" className="flex flex-wrap justify-center items-center w-[300px] h-auto px-[2%]">
            <NumberButton id="1" number="1" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="2" number="2" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="3" number="3" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="4" number="4" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="5" number="5" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="6" number="6" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="7" number="7" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="8" number="8" display={display} setDisplay={setDisplay}></NumberButton>
            <NumberButton id="9" number="9" display={display} setDisplay={setDisplay}></NumberButton>
          </div>
          {/* BUTTONS: Operations */}
          <div id="operation-buttons-container" className="flex flex-col justify-center items-center w-[20%] h-auto px-[2%]">
            <OperationButton id="add" operation="+"></OperationButton>
            <OperationButton id="subtract" operation="-"></OperationButton>
            <OperationButton id="multiply" operation="x"></OperationButton>
            <OperationButton id="divide" operation="/"></OperationButton>
          </div>
        </div>

        {/* BUTTONS: Utilities */}
        <div id="utilities-buttons-container" className="border-2 flex flex-wrap justify-center items-center w-[300px] h-[60px] px-[2%] mt-[6%] mx-auto">
          <UtilityButton id="decimal" utility="."></UtilityButton>
          <UtilityButton id="clear" utility="C"></UtilityButton>
          <UtilityButton id="equals" utility="="></UtilityButton>
        </div>
      </div>
    </div>
  );
};

export default App;