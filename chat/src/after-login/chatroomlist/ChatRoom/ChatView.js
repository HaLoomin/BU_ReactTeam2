import React, { useEffect, useState } from 'react';
import { getPostByNo } from './ChatRoomData';

const ChatView = ({ history, location, match }) => {
  const [ data, setData ] = useState({});

  const { no } = match.params;

  useEffect(() => {
    setData(getPostByNo(no));
  }, [ ]);

  return (
    <>
      <h2 align="center">채팅방</h2>

      <div className="chat-view-wrapper">
        {
          data ? (
            <>
              <div className="chat-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="chat-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default ChatView;