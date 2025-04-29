import { Flex } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { LandingText } from "@/shared/Text";
import { Button } from "@/shared";

const InformationBlock = () => {
  return (
    <Flex
      vertical
      align="center"
      gap={15}
      style={{ paddingBlock: 30, paddingInline: 20 }}
    >
      <LandingText>
        Медитируй в любое время, в любом месте, в любых обстоятельствах
      </LandingText>

      <span></span>

      <Title level={2}>Персональная микромедитация</Title>

      <LandingText>
        Мы создали пространство, где вы можете быстро снять напряжение,
        восстановиться от стресса, настроиться на важное или сфокусироваться на
        главном при помощи персонализированных неформальных микромедитаций
      </LandingText>

      <Button type="primary">Создать медитацию</Button>
    </Flex>
  );
};

export default InformationBlock;
