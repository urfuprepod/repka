"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { Menu as NavMenu } from "antd";
import { usePathname } from "next/navigation";
import { useMeditationStore } from "@/processes/store";

const menuItems = [
  // { key: "home", label: "Главная" },
  { key: "create", label: <Link href="/create">Создание медитации</Link> },
  // { key: "contact", label: "Контакты" },
];

const Menu = () => {
  const pathname = usePathname();
  const { hasMeditation } = useMeditationStore((state) => state);

  const allMenuItems = useMemo(() => {
    if (hasMeditation)
      return menuItems.concat({
        key: "meditation",
        label: <Link href="/meditation">Прослушать медитацию</Link>,
      });
    return menuItems;
  }, [hasMeditation]);

  const activeKey = useMemo<string[]>(() => {
    const active = allMenuItems.find(({ key }) => `/${key}` === pathname)?.key;
    if (!active) return [];
    return [active];
  }, [pathname, allMenuItems]);

  return (
    <NavMenu
      mode="horizontal"
      items={allMenuItems}
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
