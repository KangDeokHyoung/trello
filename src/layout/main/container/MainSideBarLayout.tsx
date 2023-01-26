import React, { useState } from "react";
import "./MainSideBarLayout.scss";
import { IoCaretForwardSharp, IoAppsSharp } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { Drawer, Button, ButtonToolbar, Placeholder } from "rsuite";

const MainSideBarLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-sidebar">
      <div className="sidebar-uitls">
        <div className="main-sidebar-profile">
          <div className="main-sidebar-profile-container">
            <div>
              <div className="profile-img" />
              <div className="profile-name">
                <IoCaretForwardSharp />
                <span className="title-bold">Hello</span>, Deok Hyuoung
              </div>
            </div>
          </div>
        </div>
        <div className="main-sidebar-list-container">
          <div className="main-sidebar-list-title">
            <h5>Your Boards</h5>
            <ButtonToolbar>
              <Button onClick={() => setOpen(true)} className="Button">
                <AiOutlinePlus className="list-title-info" />
              </Button>
            </ButtonToolbar>

            <Drawer open={open} onClose={() => setOpen(false)}>
              <Drawer.Body>
                <Placeholder.Paragraph graph="image" className="Placeholder" />
              </Drawer.Body>
            </Drawer>
          </div>

          <div className="main-sidebar-list">
            <ul className="sidebar-list-items">
              <li>
                <IoAppsSharp className="list-items-ioappssharp" />
                <div className="list-items-title">WorkSpace1</div>
                <HiChevronRight className="list-items-hichevronright" />
              </li>
              <li>
                <IoAppsSharp className="list-items-ioappssharp" />
                <div className="list-items-title">WorkSpace1</div>
                <HiChevronRight className="list-items-hichevronright" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSideBarLayout;
