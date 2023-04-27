import React from "react";
import SimpleBar from "simplebar-react";

const Sidebar = ({ toggleState, ...props }) => {
  return (
    <React.Fragment>
      <div
        className={`card-aside card-aside-right user-aside toggle-slide toggle-slide-right toggle-break-xxl ${
          toggleState && "content-active"
        }`}
        id="sidePanel_01"
      >
        <SimpleBar className="card-inner-group">{props.children}</SimpleBar>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
