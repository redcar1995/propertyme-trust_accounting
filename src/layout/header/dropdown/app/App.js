import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "../../../../components/Component";

const AppDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#dropdown"
        onClick={(ev) => ev.preventDefault()}
        className="dropdown-toggle nk-quick-nav-icon"
      >
        <div className="icon-status icon-status-na">
          <Icon name="menu-circled"></Icon>
        </div>
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-lg">
        <div className="dropdown-body">
          <ul className="list-apps">
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`} onClick={toggle}>
                <span className="list-apps-media">
                  <Icon name="dashlite" className="bg-primary text-white"></Icon>
                </span>
                <span className="list-apps-title">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/app-chat`} onClick={toggle}>
                <span className="list-apps-media">
                  <Icon name="dashlite" className="bg-info-dim"></Icon>
                </span>
                <span className="list-apps-title">Chats</span>
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/app-messages`} onClick={toggle}>
                <span className="list-apps-media">
                  <Icon name="dashlite" className="bg-success-dim"></Icon>
                </span>
                <span className="list-apps-title">Messages</span>
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/app-calender`} onClick={toggle}>
                <span className="list-apps-media">
                  <Icon name="dashlite" className="bg-danger-dim"></Icon>
                </span>
                <span className="list-apps-title">Calender</span>
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/components`} onClick={toggle}>
                <span className="list-apps-media">
                  <Icon name="dashlite" className="bg-secondary-dim"></Icon>
                </span>
                <span className="list-apps-title">Components</span>
              </Link>
            </li>
          </ul>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AppDropdown;
