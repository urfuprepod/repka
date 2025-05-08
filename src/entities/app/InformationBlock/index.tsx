import { Flex } from "antd";
import React from "react";
import Title from "antd/es/typography/Title";
import { LandingText } from "@/shared/Text";
import { Button, LinkedButton } from "@/shared";

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

      <Title level={2}>Персональная микромедитация</Title>

      <LandingText>
        Мы создали пространство, где вы можете быстро снять напряжение,
        восстановиться от стресса, настроиться на важное или сфокусироваться на
        главном при помощи персонализированных неформальных микромедитаций
      </LandingText>

      <LinkedButton href="create" type="primary">Создать медитацию</LinkedButton>
    </Flex>
  );
};

export default InformationBlock;
