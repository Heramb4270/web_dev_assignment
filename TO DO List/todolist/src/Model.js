import React, { useState } from "react";
import { useEffect } from "react";
export default function ({
  setVisible,
  visible,
  setDescription,
  setDisplayAlert,
  inputValue,
}) {
  const [generateUsingAI, setGenerateUsingAI] = useState("");
  const [loading, setLoading] = useState(false);
  function changeStates() {
    setVisible(false);
    // setDisplayAlert(true);
    setDescription(generateUsingAI);
    alert("Description Added Successfully");
  }
  async function GenerateUsingAI() {
    if (inputValue !== "") {
      setLoading(true);
      const res = await fetch("http://localhost:5000/generate-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: inputValue,
        }),
      });
      const data = await res.json();
      console.log(data.description);
      setGenerateUsingAI(data.description);
      setLoading(false);
    } else {
      alert("Enter Input Value First");
    }
  }

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabindex="-1"
      aria-hidden="true"
      class=" overflow-y-auto overflow-x-hidden  flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Description
            </h3>
            <button
              type="button"
              onClick={() => setVisible(false)}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="p-10 md:p-5 space-y-4  bg-slate-300">
            <textarea
              rows="10"
              cols="60"
              value={generateUsingAI || ""}
              onChange={(e) => setGenerateUsingAI(e.target.value)}
            ></textarea>
          </div>

          <div class="flex items-center p-4 md:p-5  border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="static-modal"
              type="button"
              onClick={changeStates}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              data-modal-hide="static-modal"
              type="button"
              onClick={() => GenerateUsingAI()}
              class=" ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Generate Using AI
            </button>
          </div>
          <div>{loading && "Generating ..."}</div>
        </div>
      </div>
    </div>
  );
}
