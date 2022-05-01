import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm = () => {
  //Actions
  const { login } = useActions();

  //Redux state
  const { error, isLoading } = useTypedSelector((state) => state.authReducer);

  //Local state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}

      <Form.Item
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        label="Username"
        name="username"
        rules={[rules.required("Enter username!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        label="Password"
        name="password"
        rules={[rules.required("Enter password!")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          style={{ width: "100%" }}
        >
          LOG IN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
