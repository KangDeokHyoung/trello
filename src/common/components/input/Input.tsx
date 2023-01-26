import React from "react";

interface Props {
  id: string;
  label?: string;
  type: string;
  onChange: (event: any) => void;
  value: any;
  classNames?: string;
  placeholder?: string;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        className={props.classNames}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      ></input>
    </>
  );
};

export default Input;
