import { Button, Form, Input, Modal } from "antd";
import { Footer } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";

const UserDeatails = ({
  handleCancel,
  handleOk,
  isModalOpen,
  onFinish,
  onFinishFailed,
  setData,
  data,
}) => {
    const [details,setDetails] = useState({})
  useEffect(() => {
    setDetails(data)
  },[data])
  const { name, email, phone, website } = details;
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ name, email, phone, website }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input onChange={(e) => setData({ ...data, name: e.target.value })} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input onChange={(e) => setData({ ...data, email: e.target.value })} />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input onChange={(e) => setData({ ...data, website: e.target.value })} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserDeatails;
