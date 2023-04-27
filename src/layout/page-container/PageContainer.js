import React, { useState, useEffect } from "react";

const PageContainer = ({ ...props }) => {
  const [themeState] = useState({
    main: "default",
    sidebar: "white",
    apps: "theme",
    header: "white",
    skin: "light",
  });

  useEffect(() => {
    document.body.className = `nk-body npc-default no-touch nk-nio-theme ${
      themeState.skin === "dark" ? "dark-mode" : ""
    }`;
  }, [themeState.skin]);

  return (
    <React.Fragment>
      <div className="nk-app-root">
        <div className="nk-wrap nk-wrap-nosidebar">
          <div className="nk-content">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PageContainer;
