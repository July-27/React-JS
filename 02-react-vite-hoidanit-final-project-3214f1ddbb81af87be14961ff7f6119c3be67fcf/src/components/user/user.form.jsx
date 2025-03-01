import { Button, Input } from "antd";

const UserForm = () => {
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>
            Full Name
            <Input />
          </span>
          <span>
            Email
            <Input />
          </span>
          <span>
            Password
            <Input.Password />
          </span>
          <span>
            Phone Number
            <Input />
          </span>
          <span>
            <Button type="primary"> Create User</Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
