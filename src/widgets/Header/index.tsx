import React from "react";
import { Space, Avatar } from "antd";
import { Tablets, UserCircle2 } from "lucide-react";
import Link from "next/link";
import Title from "antd/es/typography/Title";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="flex py-0 px-[24px] bg-white justify-between items-center shadow-md sticky top-0 z-5">
      {/* Логотип слева */}
      <Link href={'/'}>
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
      </Link>

      <Menu />

      <Space size="middle">
        <span>Иван Иванов</span>
        <Avatar icon={<UserCircle2 />} />
      </Space>
    </div>
  );
};

export default Header;
