import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  // ModalFooter,
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
  // Badge,
} from "reactstrap";
import { AiOutlineUserAdd } from "react-icons/ai";
import React, { useEffect, useState } from "react";

const user = {
  name: "가나다",
  phone: "123456",
  uId: "qwer",
};
const myinfo = {
  name: "내이름",
  myicon: "https://picsum.photos/id/18/60",
  mymemo: "리액트",
};

export default function FriendsListHeader() {
  const [modal, setModal] = useState(false);
  const [tabState, setTabState] = useState("1");
  const [friendName, setFriendName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [friendId, setFriendId] = useState("");
  const [notAllow, setNotAllow] = useState(true);

  const toggle = () => {
    setModal(!modal);
    setFriendName("");
    setPhoneNum("");
    setFriendId("");
    setNotAllow(true);
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
    if (friendName === user.name && phoneNum === user.phone) {
      alert("친구를 추가하였습니다.");
      toggle();
    } else if (friendId === user.uId) {
      alert("친구를 추가하였습니다.");
      toggle();
    } else {
      alert("사용자를 찾을 수 없습니다.");
    }
  }; // 친구추가 모달 확인 버튼

  // const addFriendList = (user) => {
  //   <div>{user.name}</div>;
  // };

  useEffect(() => {
    if (friendName && phoneNum) {
      setNotAllow(false);
      return;
    }
    if (friendId) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [friendName, phoneNum, friendId]); // 친구추가 모달 확인 버튼 활성화
  return (
    <>
      <Label size="lg" style={{ marginLeft: "15px", marginTop: "20px", marginBottom: "10px" }}>
        친구
      </Label>
      <Button style={{ marginTop: "22px" }} color="gray" outline onClick={toggle} className="float-end">
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
              <Button onClick={onClickConfirmButton} disabled={notAllow} color="primary" className="float-end">
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
              <h6>카카오톡 ID를 등록하고 검색을 허용한 친구만 찾을 수 있습니다.</h6>
              <div style={{ height: "286px" }} />
              <Button onClick={onClickConfirmButton} disabled={notAllow} color="primary" className="float-end">
                친구추가
              </Button>
            </TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
      <div>
        <InputGroup size="lg">
          {/* <InputGroupText> */}
          <img src={myinfo.myicon} alt="" />
          {/* </InputGroupText> */}
          <InputGroupText style={{ width: "80%", height: "60px" }}>{myinfo.name}</InputGroupText>
          {/* <Input /> */}
        </InputGroup>
        <hr style={{ marginLeft: "-1%", marginRight: "7.5%" }} />
      </div>
      {/* <h2 style={{ display: "flex" }}>
        <Badge color="info">{myinfo.myicon}</Badge>
        <h5 style={{ marginLeft: "15px", display: "flex", flexDirection: "column-reverse" }}>{myinfo.name}</h5>
      </h2> */}
      {/* <div>{addFriend}</div> */}
    </>
  );
}
