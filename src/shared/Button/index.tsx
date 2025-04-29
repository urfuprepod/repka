import { BaseButtonProps } from "antd/es/button/button";
import React, { FC, PropsWithChildren } from "react";
import { Button as BaseButton, Flex } from "antd";

const Button: FC<BaseButtonProps & {fontSize?: number}> = (props) => {
  const {  children } = props;
  return (
    <BaseButton {...props} style={{ height: 'auto', padding: '20px 15px' }}>{children}</BaseButton>
  );
};

export default Button;
