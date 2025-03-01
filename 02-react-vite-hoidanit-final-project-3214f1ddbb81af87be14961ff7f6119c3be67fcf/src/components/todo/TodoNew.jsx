import { useState } from "react";

const TodoNew = (props) => {
  // useState hook(getter/setter)
  // const valueInput = "July";
  const [valueInput, setValueInput] = useState("");

  const { AddNewTodo } = props;
  // AddNewTodo("July");
  const HandleClick = () => {
    AddNewTodo(valueInput);
    setValueInput("");
  };

  const HandleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => HandleOnChange(event.target.value)}
        value={valueInput}
      />
      <button onClick={HandleClick}>Add</button>
    </div>
  );
};
export default TodoNew;
