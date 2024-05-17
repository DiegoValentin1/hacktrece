import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import fondo from '../assets/imgs/back.png';

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginScreen = () => (
  <div className="flex justify-center items-center h-screen"
    style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%'
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-full max-w-md rounded-lg p-8"
    >
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Login</h1>
      </div>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ message: "Please input your username!" }]}
        className="mb-4 font-bold text-sm"
      >
        <Input className="w-full" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{   message: "Please input your password!" }]}
        className="mb-4 font-bold text-sm"
      >
        <Input.Password className="w-full" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" className="mb-4">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button style={{backgroundColor: "#7edccd"}} htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default LoginScreen;
