import React, { FC } from "react";
import { partialProps } from "../utils";

type AdditionalProps = {
  fontSize: number;
  textAlign: "center" | "left" | "right";
};

const TextMeditation: FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > &
    AdditionalProps
> = (props) => {
  const { style, fontSize, textAlign, ...rest } = props;

  return <p {...rest} style={{ ...style, fontSize, textAlign }} />;
};

export const LandingText = partialProps(TextMeditation, {
  fontSize: 24,
  textAlign: "center",
});

export const SimpleText = partialProps(TextMeditation, {
  fontSize: 16,
  textAlign: 'center',
  style: {
    fontWeight: '400'
  }
})
