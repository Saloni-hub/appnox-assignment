import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EditOutlined,
  HeartTwoTone,
  HeartFilled,
  DeleteFilled,
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
    setData(value);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    const newArray = userData.map((item) =>
      item.id !== data.id ? item : data
    );
    setUserData(newArray);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const deleteUser = (value) => {
    const remainingUser = userData.filter((item) => item.id !== value.id);
    setUserData(remainingUser);
  };
  const handleClick = (value) => {
    const newArray = userData.map((item) =>
      item.id !== value.id ? item : { ...item, isliked: !item.isliked }
    );
    setUserData(newArray);
  };

  return (
    <>
      <Row>
        {userData.length > 0 &&
          userData?.map((item) => {
            const { id, name, email, phone, website, username } = item || {};
            return (
              <Col xs={24} md={8} lg={6} xl={6} key={id}>
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
                    item.isliked ? (
                      <HeartFilled
                        style={{ color: "red", scale: "1.2" }}
                        key={id}
                        onClick={() => handleClick(item)}
                      />
                    ) : (
                      <HeartTwoTone
                        key={id}
                        twoToneColor="#FF0000"
                        style={{ color: "white", scale: "1.2" }}
                        onClick={() => handleClick(item)}
                      />
                    ),
                    <EditOutlined
                      key="edit"
                      style={{ scale: "1.2" }}
                      onClick={() => {
                        showModal(item);
                      }}
                    />,
                    <DeleteFilled
                      key="delete"
                      style={{ scale: "1.2" }}
                      onClick={() => deleteUser(item)}
                    />,
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
