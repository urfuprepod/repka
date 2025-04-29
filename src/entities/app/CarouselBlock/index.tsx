"use client";

import { Card, Carousel, Flex } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { Button } from "@/shared";

const CarouselBlock = () => {
  return (
    <Flex vertical gap={20} align="center">
      <Title level={3}>Почему стоит попробовать</Title>
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Carousel
          dots={false}
          speed={500}
          autoplay={{ dotDuration: true }}
          arrows
        >
          <Card title="Причина 1" style={{ width: 300 }}>
            <p>Медитация</p>
            <p>Медитация</p>
            <p>Медитация</p>
          </Card>

          <Card title="Причина 2" style={{ width: 300 }}>
            <p>Медитация</p>
            <p>Медитация</p>
            <p>Медитация</p>
          </Card>

          <Card title="Причина 3" style={{ width: 300 }}>
            <p>Медитация</p>
            <p>Медитация</p>
            <p>Медитация</p>
          </Card>
        </Carousel>
      </div>

      <Button type="primary">Создать медитацию</Button>

      <Title level={3}>Отзывы</Title>

      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <Carousel
          dots={false}
          speed={500}
          autoplay={{ dotDuration: true }}
          arrows
        >
          <Card title="Отзыв 1" style={{ width: 300 }}>
            <p>Медитация</p>
            <p>Медитация</p>
            <p>Медитация</p>
          </Card>

          <Card title="Отзыв 2" style={{ width: 300 }}>
            <p>Медитация</p>
            <p>Медитация</p>
            <p>Медитация</p>
          </Card>

          <Card title="Отзыв 3" style={{ width: 300 }}>
            <p>Медитация</p>
            <p>Медитация</p>
            <p>Медитация</p>
          </Card>
        </Carousel>
      </div>

      <Button type="primary">Создать медитацию</Button>
    </Flex>
  );
};

export default CarouselBlock;
