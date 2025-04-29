import React, { FC } from "react";
import { partialProps } from "../utils";

type AdditionalProps = {
  fontSize: number;
  textAlign: "center" | "left" | "right";
};

const TextMeditation: FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > &
    AdditionalProps
> = (props) => {
  const { style, fontSize, textAlign, ...rest } = props;

  return <span {...rest} style={{ ...style, fontSize, textAlign }} />;
};

export const LandingText = partialProps(TextMeditation, {
  fontSize: 24,
  textAlign: "center",
});
