import { Button } from "reactstrap";
import "./FriendsList.css";

export default function FriendsListBody(props) {
  const deleteMyFriend = (id) => {
    const deleteConfirm = window.confirm("친구를 삭제 하시겠습니까?");
    if (deleteConfirm === true) {
      props.setMyFriends(props.myFriends.filter((mf) => mf.id !== id));
    }
  };

  props.myFriends.sort(function (a, b) {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
  });

  return (
    <div>
      <h6 className="myFriendsCount">
        친구({Object.keys(props.myFriends).length})
      </h6>
      {props.myFriends.map((mf) => (
        <div className="myFriendListDiv" key={mf.id}>
          <img className="myFriendImg" src={mf.photo} alt="" />
          {mf.name}
          <Button
            className="deleteFriend"
            onClick={() => deleteMyFriend(mf.id)}
            size="sm"
            color="danger"
          >
            삭제
          </Button>
          <hr className="nextList" style={{ color: "lightgray" }} />
        </div>
      ))}
    </div>
  );
}
