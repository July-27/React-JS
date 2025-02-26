import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import LogoReact from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "July" },
    { id: 2, name: "Le Van Toan" },
  ]);

  const name = "July";
  const age = 21;
  const data = {
    country: "VietNam",
    major: "AI",
  };

  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew AddNewTodo={AddNewTodo} />
      <TodoData name={name} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={LogoReact} className="logo" />
      </div>
    </div>
  );
};

export default App;
