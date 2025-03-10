import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import LogoReact from "../../assets/react.svg";
import { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "July" },
    // { id: 2, name: "Le Van Toan" },
  ]);

  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10000000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const DeleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew AddNewTodo={AddNewTodo} />
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} DeleteTodo={DeleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={LogoReact} className="logo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
