import React from "react";
import "./UserPopoverContents.scss"

const UserPopoverContents = ({ closeHandler, rect }: any) => {
  return (
    <div id="user-popover-content">
      <div>
        <div>로그아웃</div>
        <div>패스워드 변경</div>
      </div>
    </div>
  );
};

export default UserPopoverContents;
