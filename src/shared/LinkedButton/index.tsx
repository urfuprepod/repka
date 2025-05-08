import { BaseButtonProps } from "antd/es/button/button";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import Button from "../Button";

type Props = {
  href: string;
  className?: string;
  type?: BaseButtonProps["type"];
};

const LinkedButton: FC<PropsWithChildren<Props>> = (props) => {
  const { href, className, type = "primary", children } = props;

  return (
    <Link href={"/" + href}>
      <Button className={className} type={type}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkedButton;
