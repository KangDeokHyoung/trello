import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Popover.scss";

const Portal = ({ content, setToggle }: any) => {
  const root = document.getElementById("portal") as HTMLElement;
  return createPortal(
    <div className="modal-Wrap">{content({ closeHandler: () => setToggle(false) })}</div>,
    root
  );
};

const Popover = ({ content, children }: any) => {
  const [toggle, setToggle] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const CLONE_CHILD = React.Children.map(children, (child) => {
    const { onClick } = children.props;
    return React.cloneElement(child, {
      ref: targetRef,
      onClick: () => {
        if (onClick) onClick();
        setToggle(true);
      },
    });
  });

  useEffect(() => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      // console.log(rect);
    }
  }, [targetRef.current]);

  return (
    <>
      {CLONE_CHILD}
      {toggle && <Portal setToggle={setToggle} content={content} />}
    </>
  );
};

export default Popover;
