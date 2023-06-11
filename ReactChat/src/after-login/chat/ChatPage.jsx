import React, { useState, useContext } from "react";
import "./ChatCss/chatPage.css";

import ChatTop from "./ChatTop";
import Chat from "./Chat";
import ChatSend from "./ChatSend";

import { ChatSelectedContext } from "../Layout";
import { UserInfoContext } from "../../App";

const ChatPage = () => {
  const chatRoomInfo = useContext(ChatSelectedContext);
  const userInfo = useContext(UserInfoContext);

  const [arr, setArr] = useState([]);

  const ChatSendHandler = (chatOwner, chatContents, chatMine) => {
    if (chatContents == "") {
    } else {
      let chatchat = (
        <Chat owner={chatOwner} contents={chatContents} mine={chatMine} />
      );
      setArr([...arr, chatchat]);
    }
  };

  const ChatRoomClose = () => {
    chatRoomInfo.chatClose();
  };

  return (
    <div>
      <div id="chat-top">
        <ChatTop
          roomNo={chatRoomInfo.roomNo}
          roomName={chatRoomInfo.roomName}
          ChatRoomClose={ChatRoomClose}
        />
      </div>
      <div id="chat-mid">{arr}</div>
      <div id="chat-bottom">
        <ChatSend userName={userInfo.name} ChatSendHandler={ChatSendHandler} />
      </div>
    </div>
  );
};

export default ChatPage;
