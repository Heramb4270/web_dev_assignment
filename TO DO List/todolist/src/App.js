// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TodoList from "./TodoList";
import InputField from "./InputField";
// import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import TodoList2 from "./TodoList2";
import Task from "./Task";
import Footer from "./Footer";
import Model from "./Model";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [onSent, setOnSent] = useState(false);
  const [Priority, setPriority] = useState("");
  const [important, setImportant] = useState(false);
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [displayAlert, setDisplayAlert] = useState(false);
  return (
    <>
      <div
        className={
          visible
            ? "backdrop-blur-lg bg-opacity-50 max-w-screen-2xl mx-auto max-h-max opacity-20"
            : " max-w-screen-2xl mx-auto max-h-max"
        }
      >
        <Navbar />
        <hr />
        <HeroSection />
        <TodoList />
        <InputField
          setInputValue={setInputValue}
          setOnSent={setOnSent}
          setTaskList={setTaskList}
          inputValue={inputValue}
          setPriority={setPriority}
          priority={Priority}
          setImportant={setImportant}
          important={important}
          setVisible={setVisible}
          visible={visible}
          description={description}
        />
        {console.log(taskList)}
        <TodoList2 />
        {onSent && (
          <div className="mx-auto max-w-3xl space-y-4">
            {taskList &&
              taskList?.map((task) => (
                <Task
                  task={task.task}
                  setTaskList={setTaskList}
                  priority={task.priority}
                  important={task.important}
                  description={task.description}
                />
              ))}
          </div>
        )}
        <Footer />
      </div>
      <div className="mx-auto max-w-screen-3xl lg:mb-16 flex justify-center ">
        {visible && (
          <Model
            setVisible={setVisible}
            visible={visible}
            inputValue={inputValue}
            setDescription={setDescription}
            setDisplayAlert={setDisplayAlert}
          />
        )}
      </div>
    </>
  );
}

export default App;
