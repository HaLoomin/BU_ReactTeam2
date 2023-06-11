import React from "react";
import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./afterlogin_css/layout.css";

import Logo from "../resource/image/logo/ReactChat_logo_new.png";

import ModePage from "./friend/MainContentTab";
import ChatPage from "./chat/ChatPage";
import NotSel from "./chat/NotSelectChat";

export const ChatSelContext = createContext();
export const ChatSelectedContext = createContext();

const Layout = () => {
  const [chatRoomSel, SetChatRoomSel] = useState(0);
  const [chatRoomName, setChatRoomName] = useState("");
  const [chatRoomNo, setChatRoomNo] = useState("");

  const chatSel = {
    changeChat: (chatRoomNo, chatRoomName) => {
      SetChatRoomSel(1);
      setChatRoomNo(chatRoomNo);
      setChatRoomName(chatRoomName);
    },
  };

  const chatSelected = {
    roomNo: chatRoomNo,
    roomName: chatRoomName,
    chatClose: () => {
      SetChatRoomSel(0);
      setChatRoomNo("");
      setChatRoomName("");
    },
  };

  let chatPageSel = chatRoomSel == 0 ? <NotSel /> : <ChatPage />;

  return (
    <div>
      <div id="main-header">
        <img id="main-logo" src={Logo} height={70} />
      </div>
      <div id="main-layout">
        <ChatSelContext.Provider value={chatSel}>
          <div id="mode-layout">
            <ModePage />
          </div>
        </ChatSelContext.Provider>
        <ChatSelectedContext.Provider value={chatSelected}>
          <div id="chat-layout">{chatPageSel}</div>
        </ChatSelectedContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
