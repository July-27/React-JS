const TodoData = (props) => {
  // cách 1
  // Props là một object {}

  // cách 2
  //   {
  //     name: "July",
  //     age: 21,
  //     data: {
  //         country:"VietNam"
  //         major:"AI"
  //       }
  //   }

  // cách 3
  const { todoList, DeleteTodo } = props;
  // ý nghĩa của cách trên
  // const name = props.name;
  // const age = props.age;
  // const data = props.data;

  const DeleteClick = (id) => {
    DeleteTodo(id);
  };

  console.log("check props: ", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log(item, index);
        return (
          <div className="todo-item" key={item.id}>
            <div>{item.name}</div>
            <button
              onClick={() => DeleteClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
