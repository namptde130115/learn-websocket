import { forwardRef, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { Button as ButtonAntd, ButtonProps } from "antd";

type CustomButtonProps = Partial<ButtonProps> & {
  color?:
    | "orange"
    | "primary"
    | "info"
    | "success"
    | "transparent"
    | "default"
    | "accent"
    | "none";
  htmlType?: "submit" | "button" | "reset";
  textSize?: "small" | "middle" | "large";
};

export const Button = forwardRef<
  HTMLElement,
  PropsWithChildren<CustomButtonProps>
>(function Button(
  {
    children,
    htmlType = "button",
    textSize = "middle",
    color = "primary",
    className,
    ...props
  },
  ref
) {
  return (
    <ButtonAntd
      htmlType={htmlType}
      className={clsx(styles.root, styles[color], styles[textSize], className)}
      ref={ref}
      {...props}
    >
      {children}
    </ButtonAntd>
  );
});
