import React from "react";
import "styles/layout.scss";

const Layout = props => {
  return (
    <>
      {/* <head> */}
      <title>양성호 닷컴</title>
      {/* </head> */}
      <div className="lay">{props.children}</div>
    </>
  );
};
export default Layout;
