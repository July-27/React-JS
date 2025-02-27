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
  const { name, age, data } = props;
  // ý nghĩa của cách trên
  // const name = props.name;
  // const age = props.age;
  // const data = props.data;

  // console.log("check props: ", props);
  return (
    <div className="todo-data">
      <div> My name is {name} </div>
      <div> Learning React </div>
      <div> Watching Youtube</div>
      <div>{JSON.stringify(props.todoList)}</div>
    </div>
  );
};
export default TodoData;
