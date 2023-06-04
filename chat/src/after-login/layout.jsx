import React from "react";

import "./layout.css";

import ModePage from "./friend/MainContentTab"
import ChatPage from "./chat/ChatPage";

const layout = () => {
  return (
    <div id="main-layout">
      <div id="mode-layout"><ModePage/></div>
      <div id="chat-layout">
        <ChatPage />
      </div>
    </div>
  );
};

export default layout;
