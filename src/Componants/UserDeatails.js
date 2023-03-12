import { Form, Input, Modal } from "antd";
import React from "react";

const UserDeatails = ({
  handleCancel,
  handleOk,
  isModalOpen,
  onFinish,
  onFinishFailed,
  setData,
  data,
}) => {
  const { name, email, phone, website } = data;
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      key={data.id}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ name, email, phone, website }}
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
          <Input
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input
            onChange={(e) => setData({ ...data, website: e.target.value })}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserDeatails;
