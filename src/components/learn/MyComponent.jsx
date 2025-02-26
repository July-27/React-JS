// arrow function(name must start with upper case character)
const FakeComponent = () => {
  return <div>fake component</div>;
};
FakeComponent;

const MyComponent = () => {
  console.log(">>> run my arrow function");
  return <div>You must take 4 hours a day for study Code FE in 6 months</div>;
};
export default MyComponent; // chỉ xuất ra 1 component chỉ định
