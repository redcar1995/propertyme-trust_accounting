import React,{useState} from "react";
import {Link} from 'react-router-dom';
import classNames from "classnames";
import Logo from "../logo/Logo";
import { Icon } from "../../components/Component";
import Button from '../../components/button/Button';
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';
const Header = ({ setVisibility }) => {
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed":true
  });

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [branddropdownOpen, setbrandDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const brandtoggle = () => setbrandDropdownOpen((prevState) => !prevState);
 
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-header-brand">
            <Logo />
            <Dropdown isOpen={branddropdownOpen} toggle={brandtoggle}>
                <DropdownToggle className="btn-action btn-dim btn-round brand"  size="sm">
                  <span>for managers</span>
                </DropdownToggle>
                <DropdownMenu className="dashwidth">
                  <ul className="link-list-opt">
                    <li className="btn-dim dashlist">
                      <DropdownItem                                             
                        tag="a"
                        href="/"
                        onClick={(ev) => ev.preventDefault()}
                      >
                        <span className="dash">for owners</span>
                      </DropdownItem>
                    </li>
                    <li className="btn-dim dashlist">
                      <DropdownItem                                             
                        tag="a"
                        href="/dashboard"
                        onClick={(ev) => ev.preventDefault()}
                      >
                        <span className="dash">for tenants</span>
                      </DropdownItem>
                    </li>                    
                  </ul>
                </DropdownMenu>
              </Dropdown>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="nav-link d-flex" onClick={() => setVisibility(false)}>
                <input
                  className="form-control border-transparent form-focus-none btn-round"
                  type="text"
                  placeholder="Search anything"
                />
                <Icon name="search" className="m-auto" />
              </li>
              <li className="nav-item" onClick={() => setVisibility(false)}>
                <Link className="nav-link" to="/features">Features</Link> 
              </li>
              <li className="nav-item" onClick={() => setVisibility(false)}>
                <Link className="nav-link" to="/pricing">Pricing</Link> 
              </li>
              <li className="nav-item" onClick={() => setVisibility(false)}>
                <Link className="nav-link" to="/blog">Blog</Link> 
              </li>
              <li className="nav-item" onClick={() => setVisibility(false)}>
                <Link className="nav-link" to="/contact">Contact us</Link> 
              </li>
              <li className="nav-item" onClick={() => setVisibility(false)}>
                <Button className="btn-round bookdemo" size="sm">
                  <Link className="nav-link book" to="/bookdemo">Book a demo</Link> 
                </Button>
              </li>
              <li className="nav-item" onClick={() => setVisibility(false)}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="btn-action btn-dim btn-round login"  size="sm">
                  <span className="loginwidth">Log in</span>
                </DropdownToggle>
                <DropdownMenu>
                  <ul className="link-list-opt">
                    <li className="btn-dim login">
                      <DropdownItem                                             
                        tag="a"
                        href="/auth-login"
                        onClick={(ev) => ev.preventDefault()}
                      >
                        <span className="dropdown">Property Manager</span>
                      </DropdownItem>
                    </li>
                    <li className="btn-dim login">
                      <DropdownItem                                             
                        tag="a"
                        href="/auth-login"
                        onClick={(ev) => ev.preventDefault()}
                      >
                        <span className="dropdown">Owner or Tenant</span>
                      </DropdownItem>
                    </li>                    
                  </ul>
                </DropdownMenu>
              </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
