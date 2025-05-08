import { FC, PropsWithChildren } from "react";

type Props = {
  isHidden?: boolean;
};

const HiddenContainer: FC<PropsWithChildren<Props>> = ({
  isHidden,
  children,
}) => {
  return <div className={`${isHidden ? "hidden" : ""}`}>{children}</div>;
};

export default HiddenContainer;
