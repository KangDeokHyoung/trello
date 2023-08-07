import React, { useState } from "react";
import { Popover, Whisper, Button } from "rsuite";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { onLogout } from "store/slice/LoginSlice";
import { getAuth, deleteUser } from "firebase/auth";
import "./CustomComponent.scss";

export const DeleteCardComponent = ({
  placement,
  children,
  deleteUser,
  id,
}: any) => (
  <Whisper
    trigger="click"
    placement={placement}
    speaker={<PopoverDeleteCard deleteUser={deleteUser} id={id} />}
  >
    <Button appearance="subtle" id="list-input-button">
      <IoMdTrash className="list-input-icon" />
    </Button>
  </Whisper>
);

const PopoverDeleteCard = React.forwardRef(
  ({ deleteUser, id, ...props }: any, ref: any) => {
    return (
      <div className="delete-pop">
        <Popover ref={ref} {...props}>
          <div onClick={() => deleteUser(id)}>삭제</div>
        </Popover>
      </div>
    );
  }
);

export const AddCardComponet = ({ placement, createUser, children }: any) => (
  <Whisper
    trigger="click"
    placement={placement}
    speaker={<PopoverAddCard createUser={createUser} />}
  >
    <Button appearance="subtle" id="list-input-button">
      <BsPlusLg className="add-Card-icon" />
      <span>Add a Card</span>
    </Button>
  </Whisper>
);

const PopoverAddCard = React.forwardRef(
  ({ createUser, ...props }: any, ref: any) => {
    const [addCard, setAddCard] = useState("");
    return (
      <Popover ref={ref} {...props}>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createUser(addCard);
            }}
          >
            <input
              value={addCard}
              onChange={(e) => setAddCard(e.target.value)}
            ></input>
            <button>Add a Card</button>
          </form>
        </div>
      </Popover>
    );
  }
);

export const UserComponet = ({ placement, children }: any) => (
  <Whisper trigger="click" placement={placement} speaker={<PopoverUser />}>
    <Button appearance="subtle">
      <FaUserCircle className="logout-info" />
    </Button>
  </Whisper>
);

const PopoverUser = React.forwardRef(({ ...props }: any, ref: any) => {
  const navigate = useNavigate();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const deleteUserHandler = () => {
    localStorage.removeItem("idToken");
    navigate("/login");
  };

  return (
    <div className="user-popover-wrap">
      <Popover ref={ref} {...props}>
        <div className="user-popover">
          <div className="btn" onClick={deleteUserHandler}>
            로그아웃
          </div>
          {/* <div className="btn">비밀번호 변경</div> */}
        </div>
      </Popover>
    </div>
  );
});
