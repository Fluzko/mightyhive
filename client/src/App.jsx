/* eslint-disable no-console */
import { Alert, Button, Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const { Item } = Form;
const { Title } = Typography;

function App() {
  const [socket, setSocket] = useState();
  const [error, setError] = useState(false);
  const [found, setFound] = useState();
  const [insertForm] = Form.useForm();
  const [fetchForm] = Form.useForm();

  useEffect(() => {
    const s = io.connect(`${process.env.REACT_APP_WSS_URL}/keyVal`);
    setSocket(s);

    return () => {
      s.close();
    };
  }, []);

  const insert = (form) => {
    socket.emit("saveKey", form);
    insertForm.setFieldsValue({ key: undefined, value: undefined });
  };

  const fetch = async ({ key }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/${key}`
      );
      setError();
      setFound(response.data.value);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Row gutter={[20, 20]}>
      <Col offset={7} span={4}>
        <Title level={5}>Save (SOCKET)</Title>
        <Form onFinish={insert} form={insertForm}>
          <Item
            label="Key"
            name="key"
            rules={[{ required: true, message: "Please input a key" }]}
          >
            <Input />
          </Item>

          <Item
            label="Value"
            name="value"
            rules={[{ required: true, message: "Please input a value" }]}
          >
            <Input />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Item>
        </Form>
      </Col>
      <Col offset={1} span={4}>
        <Title level={5}>Get by id (HTTP)</Title>
        <Form onFinish={fetch} form={fetchForm}>
          <Item
            label="Key"
            name="key"
            rules={[{ required: true, message: "Please input a key" }]}
          >
            <Input />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Find
            </Button>
          </Item>
        </Form>
        {!error && found && (
          <Alert message={`value: ${found}`} type="success" showIcon />
        )}
        {error && <Alert message="Invalid key" type="error" showIcon />}
      </Col>
    </Row>
  );
}

export default App;
