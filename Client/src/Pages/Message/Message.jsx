import React from "react";
import LeftSide from "../HomeFile/leftSide"; // LeftSide

const Message = () => {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide />
      </div>
      <div className="middleSide">
        <p>Message page content</p>
      </div>
    </div>
  );
};

export default Message;
