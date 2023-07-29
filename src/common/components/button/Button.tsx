import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: any;
  className?: string;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button type={props.type || "button"} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
