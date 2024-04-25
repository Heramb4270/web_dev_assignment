import React, { useState } from "react";
import Model from "./Model";
export default function InputField({
  setInputValue,
  inputValue,
  setOnSent,
  setTaskList,
  setPriority,
  priority,
  setImportant,
  important,
  visible,
  setVisible,
  description,
}) {
  function ChangeStates() {
    setOnSent(true);
    console.log(description + " ....");
    if (description !== "") {
      setTaskList((prevTask) => [
        ...prevTask,
        {
          task: inputValue,
          priority: localPriority,
          important: important,
          description: description,
        },
      ]);
      setInputValue("");
      setImportant(false);
    }

    // setPriority(localPriority);
  }
  function MarkAsIMP() {
    setImportant(true);
    alert("Marked As Important");
  }
  const [localPriority, setLocalPriority] = useState("");
  return (
    <div className="max-w-screen-xl mx-auto space-x-4">
      <>
        <div className=" flex items-center mb-5">
          <input
            id="input1"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the task that you want to do Today"
          />
          <button
            type="button"
            onClick={ChangeStates}
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-around">
          <button
            type="button"
            onClick={MarkAsIMP}
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Mark As Important
          </button>
          <button
            type="button"
            onClick={() => setVisible((prv) => !prv)}
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Description
          </button>
          {/* <div> */}
          <select
            value={localPriority}
            onChange={(e) => setLocalPriority(e.target.value)}
            className={`border border-transparent rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="Low" className="bg-green-500 text-white">
              Low
            </option>
            <option value="Medium" className="bg-yellow-500 text-gray-800">
              Medium
            </option>
            <option value="High" className="bg-red-500 text-white">
              High
            </option>
          </select>
        </div>
      </>
    </div>
  );
}
