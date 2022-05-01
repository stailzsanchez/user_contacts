import React from "react";
import { IContact } from "../models/IContact";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { rules } from "../utils/rules";

import { Row, Col, Form, Input, Button } from "antd";
import {
  PhoneOutlined,
  TagOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";

type ContactFormType = {};

const ContactForm = React.memo((props: ContactFormType) => {
  //Actions
  const { addContact, setContact, setIsShowModalContact } = useActions();

  //Redux state
  const { methodForm, editableContact } = useTypedSelector(
    (state) => state.contactsReducer
  );
  const { id, name, phone, company, email, position } = editableContact;
  //Hook для работы с формой
  const [form] = Form.useForm();

  const titleModal =
    methodForm === "add-contact" ? "Add new contact" : "Edit contact";

  const handleSubmit = (values: IContact) => {
    if (methodForm === "add-contact") {
      addContact(values);
    } else if (methodForm === "edit-contact") {
      setContact({ ...values, id: id });
    }
    handleCancel();
  };

  const handleReset = () => {
    form.resetFields();
  };

  const handleCancel = () => {
    setIsShowModalContact(false);
    form.resetFields();
  };

  return (
    <Row justify="space-around">
      <h2>{titleModal}</h2>
      <Col style={{ width: "100%" }}>
        <Form
          form={form}
          name="contact-form"
          layout="vertical"
          autoComplete="off"
          onFinish={handleSubmit}
          onReset={handleReset}
          initialValues={{ name, phone, company, email, position }}
        >
          <Form.Item
            label="Name"
            rules={[rules.required("Enter name")]}
            name="name"
          >
            <Input
              autoFocus
              name="name"
              placeholder="Name"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input
              name="phone"
              placeholder="Phone"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", message: "Is not valid email" }]}
          >
            <Input name="email" placeholder="Email" prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item label="Company" name="company">
            <Input
              name="company"
              placeholder="Company"
              prefix={<TeamOutlined />}
            />
          </Form.Item>

          <Form.Item label="Position" name="position">
            <Input
              name="position"
              placeholder="Position"
              prefix={<TagOutlined />}
            />
          </Form.Item>

          <Form.Item>
            <Row justify="end" gutter={10}>
              <Col>
                <Button type="ghost" htmlType="button" onClick={handleReset}>
                  Reset
                </Button>
              </Col>

              <Col>
                <Button type="ghost" htmlType="button" onClick={handleCancel}>
                  Cancel
                </Button>
              </Col>

              <Col>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
});

export default React.memo(ContactForm);
