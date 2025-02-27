import { useState } from "react";

const TodoNew = (props) => {
  // useState hook(getter/setter)
  // const valueInput = "July";
  const [valueInput, setValueInput] = useState("July");

  const { AddNewTodo } = props;
  // AddNewTodo("July");
  const HandleClick = () => {
    alert(`Added`);
    console.log("ValueInput", valueInput);
  };

  const HandleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => HandleOnChange(event.target.value)}
      />
      <button onClick={HandleClick}>Add</button>
      <div>My text input is: {valueInput}</div>
    </div>
  );
};
export default TodoNew;
