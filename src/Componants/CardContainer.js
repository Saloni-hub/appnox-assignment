import React, { useEffect, useState } from "react";
import { Row, Col, Card, Avatar, Space, Modal } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  DeleteOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import "./styles.css";
import UserDeatails from "./UserDeatails";

const CardContainer = ({ userData, setUserData }) => {
  const { Meta } = Card;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const showModal = (value) => {
    setIsModalOpen(true);
    setData(value)
  };

  const handleOk = () => {
    setIsModalOpen(false);    
    const newArray = userData.map((item) => item.id !== data.id ? item : data)
    setUserData(newArray)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Row>
        {userData.length > 0 && userData?.map((item) => {
          const { id, name, email, phone, website,username } = item || {};
          return (
            <Col xs={24} md={8} lg={6} xl={6}>
              <Card
                key={id}
                style={{ margin: 15 }}
                cover={
                  <div className="cardHeader">
                    <img
                      alt={username}
                      src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
                      width="200px"
                      height="200px"
                    />
                  </div>
                }
                actions={[
                  <HeartTwoTone key="setting" twoToneColor="red" />,
                  <EditOutlined key="edit" onClick={() => {
                    showModal(item)
                  }}/>,
                  <DeleteOutlined key="delete" />,
                ]}
              >
                <h3>{name}</h3>
                <Meta avatar={<MailOutlined />} description={email} />
                <Meta avatar={<PhoneOutlined />} description={phone} />
                <Meta avatar={<GlobalOutlined />} description={website} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <UserDeatails
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        setData={setData}
        data={data}
      />
    </>
  );
};

export default CardContainer;
