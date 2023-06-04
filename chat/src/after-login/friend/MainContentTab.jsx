import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import FriendsList from "./FriendMain";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineChat } from "react-icons/hi";

import ChatRoom from "../chatroomlist/ChatRoomList"

export default function MainContentTab() {
  return (
    <Tab.Container defaultActiveKey="first">
      <Row>
        <Col style={{ maxWidth: "50px" }}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">
                <AiOutlineUser size="25" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <HiOutlineChat size="25" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col style={{ maxWidth: "100%" }}>
          <Tab.Content style={{ marginLeft: "25px", marginRight: "30px" }}>
            <Tab.Pane eventKey="first">
              <FriendsList/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ChatRoom/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
