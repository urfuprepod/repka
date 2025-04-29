import { FC } from 'react';

export function partialProps<P extends object, K extends keyof P>(
  Component: FC<P>,
  partial: Pick<P, K>,
): FC<Omit<P, K>> {
  return (props) => {
    return <Component {...partial} {...(props as P)} />;
  };
}