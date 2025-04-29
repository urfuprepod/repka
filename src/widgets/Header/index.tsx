import React from "react";
import { Layout, Menu, Space, Avatar, Image } from "antd";
import { Tablets, UserCircle2 } from "lucide-react";
import Title from "antd/es/typography/Title";

const menuItems = [
  { key: "home", label: "Главная" },
  { key: "about", label: "О нас" },
  { key: "contact", label: "Контакты" },
];


const Header = () => {
  return (
    <div className="flex py-0 px-[24px] bg-white justify-between items-center shadow-md sticky top-0 z-5">
      {/* Логотип слева */}
      <Space align="center">
        {/* <Image
          width={40}
          src="/logo.png" // Путь к логотипу
          preview={false}
          alt="Логотип"
        /> */}
        <Tablets style={{ width: 40 }} />
        <Title level={4} style={{ margin: 0 }}>
          Сайт медитации
        </Title>
      </Space>

      <Menu
        mode="horizontal"
        items={menuItems}
        style={{
          flex: 1,
          justifyContent: "center",
          borderBottom: "none", // Убираем дефолтную границу
        }}
      />

      <Space size="middle">
        <span>Иван Иванов</span>
        <Avatar icon={<UserCircle2 />} />
      </Space>
    </div>
  );
};

export default Header;
