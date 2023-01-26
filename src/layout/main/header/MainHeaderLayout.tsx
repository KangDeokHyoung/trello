import "./MainHeaderLayout.scss";
import { useDispatch } from "react-redux";
import { onLogout } from "store/slice/LoginSlice";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popover from "components/ui/popover/Popover";
import { UserComponet } from "components/ui/popover/CustomComponent";
import UserPopoverContents from "components/ui/modal/UserPopoverContents";

const MainHeaderLayout = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // const logoutHandler = () => {
  //   dispatch(onLogout());
  //   Navigate("/"); 
  // };

  return (
    <section className="main-header">
      <div className="header-logo">
        <div className="logo" />
      </div>
      <div className="header-contents">
        <div className="header-contents-title">
          <h3>WorkSpace1</h3>
        </div>
        <div className="header-contents-utils">
          <div className="header-input">
            <input />
            <i className="serch-info" />
          </div>
          <div className="header-users">
            <UserComponet placement="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeaderLayout;
