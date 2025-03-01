import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtn = () => {
    console.log("check form: ", { fullName, email, passWord, phone });
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>
            Full Name
            <Input
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </span>
          <span>
            Email
            <Input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </span>
          <span>
            Password
            <Input.Password
              value={passWord}
              onChange={(event) => {
                setPassWord(event.target.value);
              }}
            />
          </span>
          <span>
            Phone Number
            <Input
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </span>
          <span>
            <Button onClick={handleClickBtn} type="primary">
              Create User
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
