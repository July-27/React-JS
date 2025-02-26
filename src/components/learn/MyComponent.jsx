import "./style.css";

//JSX chỉ có 1 parent(1 thẻ HTML trong file)--> dùng fragment
// arrow function(name must start with upper case character)
const FakeComponent = () => {
  return <div>fake component</div>;
};
FakeComponent;

const MyComponent = () => {
  const time = 6;
  const lecture = "Code FE";
  /*
  const exe_type = True;-->boolean
  const exe_type = undefine;
  const exe_type = null;
  const exe_type = [1,2,3];-->array
  const plan = {
    time: "July",
    lecture: 21
  }-->object
  just print data types with output is the text, don't print output is calculation, array or object

  if we really want to print that, we can use {JSON.stringify(exe_type)} to print that in browser except the data type is undefine
  */

  return (
    //fragment
    //can write code javascript in HTML, we can use {}
    <>
      <div>
        You must take {time} hours a day for study {lecture} in 6 months
      </div>
      <div>{console.log("Hey July, You can do it!!!")}</div>
      <div className="july" style={{ borderRadius: "10px" }}>
        July
      </div>
    </>
  );
};
export default MyComponent; // chỉ xuất ra 1 component chỉ định
