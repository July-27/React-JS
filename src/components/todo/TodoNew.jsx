const TodoNew = (props) => {
  console.log("==> check point: ", props);
  const { AddNewTodo } = props;
  // AddNewTodo("July");
  const HandleClick = () => {
    alert(`Added`);
  };

  const HandleOnChange = (name) => {
    console.log(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => HandleOnChange(event.target.value)}
      />
      <button onClick={HandleClick}>Add</button>
    </div>
  );
};
export default TodoNew;
