import "./style.css";

//JSX chỉ có 1 parent(1 thẻ HTML trong file)--> dùng fragment
// arrow function(name must start with upper case character)
const FakeComponent = () => {
  return <div>fake component</div>;
};
FakeComponent;

const MyComponent = () => {
  return (
    //fragment
    <>
      <div>You must take 4 hours a day for study Code FE in 6 months</div>
      <div className="july" style={{ borderRadius: "10px" }}>
        July
      </div>
    </>
  );
};
export default MyComponent; // chỉ xuất ra 1 component chỉ định
