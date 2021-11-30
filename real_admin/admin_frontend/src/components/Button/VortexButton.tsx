import { forwardRef, PropsWithChildren } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { Button as ButtonAntd, ButtonProps } from "antd";

import { VortexBackground } from "./VortexBackground";

type VortextButtonProps = Partial<ButtonProps> & {
  color?: "orange" | "primary" | "info" | "success";
  htmlType?: "submit" | "button" | "reset";
};

export const VortextButton = forwardRef<
  HTMLElement,
  PropsWithChildren<VortextButtonProps>
>(function VortextButton(
  {
    children,
    htmlType = "button",
    color = "primary",
    size = "middle",
    className,
    ...props
  },
  ref
) {
  return (
    <div className={clsx(styles.root, styles[`root_${size}`])}>
      <ButtonAntd
        htmlType={htmlType}
        className={clsx(styles.btnRoot, styles[color], styles[size], className)}
        ref={ref}
        type="primary"
        shape="round"
        size={size}
        {...props}
      >
        {children}

        <VortexBackground
          className={styles.vortexBackground}
          size={size}
          color={color}
        />
      </ButtonAntd>
    </div>
  );
});
