import React from "react";
import { Form, Input, Button, Card, Col, Row } from "antd";
import Stat from "./Stat";
const Game = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row style={{ width: "90%", marginBottom: "30px" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card title="오늘의 문제">
            <p style={{ fontSize: "30px" }}>3 X 2</p>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Form
        style={{ width: "90%" }}
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="답은?"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="small" style={{ width: "200px" }} />
        </Form.Item>

        <Form.Item
          label="닉네임"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input size="small" style={{ width: "200px" }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row style={{ width: "90%", marginBottom: "30px" }}>
        <Stat />
      </Row>
    </div>
  );
};

export default Game;
