import React, {useState} from "react";
import "./ChatSend.css"

const ChatSend = (props) => {
  const nowUser = props.userName;
  const [nowContent, setNowContent] = useState("");
  // console.log(nowContent);

  const ContentChange = (value) => {
    setNowContent(value);
  }
  if(props.check == 1){
    setNowContent("");
  }

  return (
    <div>
      <input id="send_input" type="text" value={nowContent} onChange={(e) => ContentChange(e.target.value)}/>
      <button id="send_bt_mine" onClick={(e) => props.ChatSendHandler(nowUser,nowContent,true)}>전송</button>
      <button id="send_bt_notmine" onClick={(e) => props.ChatSendHandler("otheruser",nowContent,false)}>다른사람</button>
    </div>
  );
  
};

export default ChatSend;
