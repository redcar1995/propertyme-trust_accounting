import React from "react";
import { Link } from "react-router-dom";

import LogoLight from "../../images/logo-light.png";

const Logo = () => {
  return (
    <Link to={"/"} className="logo-link">
      <img className="logo-img" src={LogoLight} alt="logo" />
    </Link>
  );
};

export default Logo;
