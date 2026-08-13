import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

function Counter() {
  let [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const incrementHandler = (numVal) => {
    // setCount(numVal + 1); shorthand notation
    // setCount(numVal + 1); 
    // setCount(numVal + 1); 

    // setCount((prevVal) => prevVal+1);

    // setCount((prevVal) => prevVal + 1);
    // setCount((prevVal) => prevVal + 1);
    // setCount((prevVal) => prevVal + 1);

    setCount((prevVal) => numVal + prevVal + 1);
    setCount((prevVal) => prevVal + 1);
    setCount((prevVal) => prevVal + 1);

  }
  return (
    <>
      <div className="flex flex-col justify-center bg-gray-900 py-12 my-auto">
        <h1 className="text-3xl text-center py-8 pb-12">Counter</h1>
        <div className="">
          <p className="text-center pb-5">Count is {count}</p>

          <div className="w-full flex gap-4 items-center justify-center pb-6">
            {/* <Button buttonPlaceholder="Increase" />
            <Button buttonPlaceholder="Decrease" />
            <Button buttonPlaceholder="Reset" /> */}
            <button
              // onClick={() => setCount(count + 1)}
              // onClick={() => setCount(4)}
              onClick={() => incrementHandler(10)}
              className="border px-8 py-2 font-light rounded-md bg-slate-950"
            >
              Increase
            </button>
            <button
              onClick={() => setCount((prev) => Math.max(prev-1, 0))}
              className="border px-8 py-2 font-light rounded-md bg-slate-950"
            >
              Decrease
            </button>
            <button
              onClick={() => {
                setCount(count => 0);
              }}
              className="border px-8 py-2 font-light rounded-md bg-slate-950"
            >
              Reset
            </button>
          </div>
          <div className="w-full flex items-center justify-center gap-6">
            {/* <Input /> */}
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="0"
              className="px-6 py-2 border border-gray-600"
            />
            {/* <Button onClick buttonPlaceholder="Set to 0" /> */}
            <button
              onClick={() => {
                if (input !== "") {
                  setCount(parseInt(input));
                }
                setInput("");
              }}
              className="border px-8 py-2 font-light rounded-md bg-slate-950"
            >
              Set to {input}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
