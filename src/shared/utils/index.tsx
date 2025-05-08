import { FC } from "react";
import { toast } from "react-toastify";

export function partialProps<P extends object, K extends keyof P>(
  Component: FC<P>,
  partial: Pick<P, K>
): FC<Omit<P, K>> {
  return (props) => {
    return <Component {...partial} {...(props as P)} />;
  };
}

export const callError = (text: string, time?: number) =>
  toast.error(text, {
    position: "top-center",
    autoClose: time ?? 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });

export const callSuccess = (text: string) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: 0,
  });
};
