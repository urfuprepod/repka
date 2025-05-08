import { BaseButtonProps } from "antd/es/button/button";
import React, { FC, PropsWithChildren } from "react";
import { Button as BaseButton, ConfigProvider, Flex } from "antd";
import { partialProps } from "../utils";

const Button: FC<
  BaseButtonProps & {
    fontSize?: number;
    primaryColor?: string;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  }
> = (props) => {
  const { primaryColor = "#52c41a", ...rest } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor, // Зелёный цвет из палитры Ant Design
        },
      }}
    >
      <BaseButton {...rest} style={{ height: "auto", padding: "20px 15px" }}>
        {props.children}
      </BaseButton>
    </ConfigProvider>
  );
};

export default Button;

export const CreatePageButton = partialProps(Button, {
  primaryColor: "00ffff",
  type: "primary",
});
