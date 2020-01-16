import React, { PureComponent } from "react";
import "styles/layout.scss";

export default class Layout extends PureComponent {
  render() {
    return (
      <>
        {/* <head> */}
        <title>양성호 닷컴</title>
        {/* </head> */}
        <div className="lay">{this.props.children}</div>
      </>
    );
  }
}
