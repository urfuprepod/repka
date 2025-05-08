"use client";

import { Card, Flex } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { Button, LinkedButton } from "@/shared";
import { Carousel } from "@/widgets";

const items: ICarouselElement[] = [
  { title: "Причина 1", paragraphs: ["Медитация", "Медитация", "Медитация"] },
  { title: "Причина 2", paragraphs: ["Медитация", "Медитация", "Медитация"] },
  { title: "Причина 3", paragraphs: ["Медитация", "Медитация", "Медитация"] },
  { title: "Причина 4", paragraphs: ["Медитация", "Медитация", "Медитация"] },
];

const reports: ICarouselElement[] = [
  { title: "Отзыв 1", paragraphs: ["Медитация", "Медитация", "Медитация"] },
  { title: "Отзыв 2", paragraphs: ["Медитация", "Медитация", "Медитация"] },
  { title: "Отзыв 3", paragraphs: ["Медитация", "Медитация", "Медитация"] },
  { title: "Отзыв 4", paragraphs: ["Медитация", "Медитация", "Медитация"] },
];

const CarouselBlock = () => {
  return (
    <Flex vertical gap={20} align="center">
      <Title level={3}>Почему стоит попробовать</Title>
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Carousel items={items} />
      </div>

      <LinkedButton href="create" type="primary">
        Создать медитацию
      </LinkedButton>

      <Title level={3}>Отзывы</Title>

      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Carousel items={reports} />
      </div>

      <LinkedButton href="create" type="primary">
        Создать медитацию
      </LinkedButton>
    </Flex>
  );
};

export default CarouselBlock;
