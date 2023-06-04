import React from "react";
import dummy from "./FriendsDummy.json";

export default function FriendsListBody() {
  console.log(dummy);
  return (
    <div>
      <h6>친구({Object.keys(dummy.myfriends).length})</h6>
      {dummy.myfriends.map((myfriend) => (
        <div key={myfriend.id}>
          <img src={myfriend.photo} alt="" /> {myfriend.name}
          <hr />
        </div>
      ))}
    </div>
  );
}
