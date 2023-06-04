import React, {useState} from "react";
import "./chatPage.css";

import Chat from "./Chat";
import ChatSend from "./ChatSend";

const ChatPage = () => {

  const [trigger,setTrigger] = useState("");
  const [arr,setArr] = useState([]);
  const [check,setCheck] = useState(0);

  const ChatSendHandler = (chatOwner, chatContents, chatMine) => {
    let chatchat = <Chat owner={chatOwner} contents={chatContents} mine={chatMine}/>;
    setArr([...arr, chatchat]);
    // setCheck(1);
    console.log(arr);
  }

  // const ChatCheckHandler = () => {
  //   setCheck(0);
  // }

  return (
    <div>
      <div id="chat-top">유저01 채팅방</div>
      <div id="chat-mid">
        {arr}
      </div>
      <div id="chat-bottom">
        <ChatSend userName="test" ChatSendHandler={ChatSendHandler} check={check} />
      </div>
    </div>
  );
};

export default ChatPage;
