import { React, useState } from "react";
import "./Chat.css";

const Chat = (props) => {
  const [owner, setOwner] = useState(props.owner);
  const [contents, setContents] = useState(props.contents);

  if (props.mine) {
    return (
      <div id="chat-mine">
        <div id="chat-owner">{owner}</div>
        <div id="chat-contents">{contents}</div>
      </div>
    );
  } else {
    return (
      <div id="chat">
        <div id="chat-owner">{owner}</div>
        <div id="chat-contents">{contents}</div>
      </div>
    );
  }
};

export default Chat;
