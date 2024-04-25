import React, { useState } from "react";

export default function Task({
  task,
  setTaskList,
  priority = "Low",
  description,
  important,
}) {
  const [isDone, setIsDone] = useState(false);

  function ChangeStates() {
    const newTask = prompt("Enter New Task");

    setTaskList((preVtask) =>
      preVtask.map((Oldtask) => {
        if (Oldtask.task === task) {
          return { task: newTask };
        } else {
          return Oldtask;
        }
      })
    );
  }

  const getPriorityColor = () => {
    if (important) {
      return "bg-red-700 text-white";
    }
    console.log(priority);
    switch (priority) {
      case "":
        return "bg-green-500 text-white";
      case "High":
        return "bg-red-500 text-white";
      case "Medium":
        return "bg-yellow-500 text-gray-800";
      case "Low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const priorityColor = getPriorityColor();

  return (
    <div className="rounded-lg bg-white shadow-lg border border-gray-200 mb-10">
      <div
        className={`flex p-4 justify-between items-center rounded-t-lg ${priorityColor}`}
      >
        <h5
          className={`${
            isDone ? "line-through text-gray-500" : ""
          } text-xl font-bold tracking-tight`}
        >
          Task : <span>{task}</span>
        </h5>
        <div className="flex items-center space-x-4">
          {!important && (
            <h2 className="text-lg font-bold">
              Priority : {priority == "" ? "Low" : priority}
            </h2>
          )}
          <h2 className="text-lg font-bold">Status : Pending</h2>
          {important && <h2 className="text-lg font-bold">IMPORTANT</h2>}
        </div>
      </div>
      <div className="p-6">
        <div className="p-1 mb-2">
          <h2 className="mb-2 text-xl font-bold text-gray-800">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-md"
            onClick={() => setIsDone((prev) => !prev)}
          >
            {isDone ? "Un-Done" : "Done"}
          </button>
          <button
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-md"
            onClick={() =>
              setTaskList((preVtask) =>
                preVtask.filter((item) => item.task !== task)
              )
            }
          >
            Delete
          </button>
          <button
            className="rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md"
            onClick={ChangeStates}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
