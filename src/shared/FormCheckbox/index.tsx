"use client";

import React, { FC, PropsWithChildren, useId, useRef, useState } from "react";
import "./styles.css";
import { CheckboxRef, Radio, RadioChangeEvent } from "antd";
import classNames from "classnames";
import { useTimer } from "../hooks";

type Props = {
  value: string;
  checked: boolean;
  onChange: (e: RadioChangeEvent) => void;
};

const FormCheckbox: FC<PropsWithChildren<Partial<Props>>> = (props) => {
  const { children, ...rest } = props;
  const id = useId();
  const [isActive, setIsActive] = useState<boolean>(false);

  const { trigger } = useTimer(() => {
    setIsActive(false);
  }, 700);

  function onClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setIsActive(true);
    trigger();
  }

  return (
    <Radio
      {...rest}
      onClick={onClick}
      id={id}
      className={classNames("simple-button", { animate: isActive })}
    >
      {children}
    </Radio>
  );
};

export default FormCheckbox;
