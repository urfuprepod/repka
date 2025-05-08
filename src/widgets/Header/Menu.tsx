'use client'

import Link from "next/link";
import React, { useMemo } from "react";
import { Menu as NavMenu } from "antd";
import { usePathname } from "next/navigation";

const menuItems = [
  // { key: "home", label: "Главная" },
  { key: "create", label: <Link href="/create">Создание медитации</Link> },
  // { key: "contact", label: "Контакты" },
];

const Menu = () => {
  const pathname = usePathname();

  const activeKey = useMemo<string[]>(() => {
    const active = menuItems.find(({ key }) => `/${key}` === pathname)?.key;
    if (!active) return [];
    return [active];
  }, [pathname]);

  return (
    <NavMenu
      mode="horizontal"
      items={menuItems}
      selectedKeys={activeKey}
      style={{
        flex: 1,
        justifyContent: "center",
        borderBottom: "none", // Убираем дефолтную границу
      }}
    />
  );
};

export default Menu;
