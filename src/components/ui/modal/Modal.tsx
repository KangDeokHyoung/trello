import React, { useState } from "react";
import "./Modal.scss";

const Modal = ({ content, children }: any) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="modal-Wrap">
      <div onClick={() => setToggle(true)}>{children}</div>
      {toggle && content({ closeHandler: () => setToggle(false) })}
      {toggle && <div className="modal-bg" onClick={() => setToggle(false)} />}
    </div>
  );
};

export default Modal;
