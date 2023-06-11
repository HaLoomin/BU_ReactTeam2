import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./FriendsList.css";
import React, { useEffect, useState, useContext } from "react";
import dummy from "./FriendsDummy.json";
import FriendsListBody from "./FriendsListBody";

import { UserInfoContext } from "../../App";

export default function FriendsListHeader() {
  const userInfo = useContext(UserInfoContext);

  const myinfo = {
    name: userInfo.name,
    myImg: "https://picsum.photos/id/18/60",
    mymemo: "리액트",
    email: userInfo.email,
    phone: userInfo.phone,
  };

  const [modal, setModal] = useState(false);
  const [tabState, setTabState] = useState("1");
  const [friendName, setFriendName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [friendId, setFriendId] = useState("");
  const [addOnOff, setAddOnOff] = useState(true);
  const [myFriends, setMyFriends] = useState(dummy.myfriends);
  const customer = dummy.customer;
  const findFriend = customer.find((item) => item.name === friendName);
  const findPhone = customer.find((item) => item.phone === phoneNum);
  const findId = customer.find((item) => item.uId === friendId);
  const overlapName = myFriends.find((item) => item.name === friendName);
  const overlapPhone = myFriends.find((item) => item.phone === phoneNum);
  const overlapId = myFriends.find((item) => item.uId === friendId);

  const toggle = () => {
    setModal(!modal);
    setFriendName("");
    setPhoneNum("");
    setFriendId("");
    setAddOnOff(true);
  }; //친구추가 모달

  const addFriendToggle = (tabnum) => {
    if (tabnum !== tabState) {
      setTabState(tabnum);
      setFriendName("");
      setPhoneNum("");
      setFriendId("");
    }
  }; // 친구추가 모달 탭

  const onClickConfirmButton = () => {
    if ((overlapName && overlapPhone) || overlapId) {
      alert("이미 친구입니다.");
      setFriendName("");
      setPhoneNum("");
      setFriendId("");
      return;
    }
    if (findFriend && findPhone) {
      alert("친구를 추가하였습니다.");
      toggle();
      setMyFriends((prevState) => {
        return [findPhone, ...prevState];
      });
    } else if (findId) {
      alert("친구를 추가하였습니다.");
      toggle();
      setMyFriends((prevState) => {
        return [findId, ...prevState];
      });
    } else {
      alert("사용자를 찾을 수 없습니다.");
    }
  }; // 친구추가 모달 확인 버튼

  useEffect(() => {
    if (friendName && phoneNum) {
      setAddOnOff(false);
      return;
    }
    if (friendId) {
      setAddOnOff(false);
      return;
    }
    setAddOnOff(true);
  }, [friendName, phoneNum, friendId]); // 친구추가 모달 확인 버튼 활성화

  return (
    <>
      <Label className="headTitle" size="lg">
        친구
      </Label>
      <Button
        onClick={toggle}
        className="addFriendsBtn float-end"
        color="gray"
        outline
      >
        <AiOutlineUserAdd size={30} />
      </Button>
      <Modal isOpen={modal} fade={true} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>친구추가</ModalHeader>
        <ModalBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                onClick={() => {
                  addFriendToggle("1");
                }}
              >
                연락처로 추가
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  addFriendToggle("2");
                }}
              >
                ID로 추가
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={tabState}>
            <TabPane tabId="1">
              <br />
              <Form>
                <Input
                  type="text"
                  placeholder="친구 이름"
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                />
                <br />
                <InputGroup>
                  <Input type="select">
                    <option>+82</option>
                    <option>+83</option>
                    <option>+84</option>
                  </Input>
                  <Input
                    style={{ width: "77%" }}
                    placeholder="전화번호"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </InputGroup>
              </Form>
              <br />
              <h6>친구의 이름과 전화번호를 입력해주세요.</h6>
              <div style={{ height: "200px" }} />
              <br />
              <Button
                onClick={onClickConfirmButton}
                disabled={addOnOff}
                color="primary"
                className="float-end"
              >
                친구추가
              </Button>
            </TabPane>
            <TabPane tabId="2">
              <br />
              <Form>
                <Input
                  type="text"
                  placeholder="친구 ID"
                  value={friendId}
                  onChange={(e) => setFriendId(e.target.value)}
                />
              </Form>
              <br />
              <h6>
                리액챗 ID를 등록하고 검색을 허용한 친구만 찾을 수 있습니다.
              </h6>
              <div style={{ height: "286px" }} />
              <Button
                onClick={onClickConfirmButton}
                disabled={addOnOff}
                color="primary"
                className="float-end"
              >
                친구추가
              </Button>
            </TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
      <div className="myProfileDiv">
        <InputGroup className="myProfile" size="lg">
          <img className="myProfileImg" src={myinfo.myImg} alt="" />
          <InputGroupText className="myProfileName">
            {myinfo.name}
          </InputGroupText>
        </InputGroup>
        <p id="myProfileEmail">{myinfo.email}</p>
        <hr className="headerEnd" />
      </div>
      <FriendsListBody myFriends={myFriends} setMyFriends={setMyFriends} />
    </>
  );
}
