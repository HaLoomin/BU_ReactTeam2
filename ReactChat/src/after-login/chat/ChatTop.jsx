import { React, useState } from "react";
import "./ChatCss/ChatTop.css";

const ChatTop = (props) => {
  return (
    <div>
      <div id="room_close_btn">
        <button onClick={props.ChatRoomClose}>X</button>
      </div>
      <div id="room_no">채팅방 번호: {props.roomNo}</div>

      <div id="room_name">채팅방 이름: {props.roomName}</div>
      <p></p>
    </div>
  );
};

export default ChatTop;
