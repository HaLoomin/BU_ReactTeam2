import React, { useEffect, useState, useRef } from "react";
import {RiChatNewFill} from "react-icons/ri";
import {chatList} from "./ChatRoom/ChatRoomData";
import Cr from './ChatRoom/Cr';
import Post from './ChatRoom/Post';
import ModifyModal from './ChatRoom/ModifyModal';
import {
  Button,
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
  Table,
  Label,
} from "reactstrap";
/* import ChatView from "./ChatRoom/ChatView"; */


const ChatRoomList = () => {
  const [modal, setModal] = useState(false);
  const [ dataList, setDataList ] = useState([]);
  const [ selected, setSelected ] = useState('');
  const [ modalOn, setModalOn ] = useState(false);


  const toggle = () => {
    setModal(!modal);
    
  }; //채팅방 추가 모달

  //고유 값으로 사용될 no
  //ref를 사용하여 변수 담기
  const nextNo = useRef(4);

  useEffect(() => { //데이터 호출
    setDataList(chatList)
  }, [ ]);

  const handleSave = (data) => { // 데이터 수정
    if(data.no) {
      setDataList(
        dataList.map(row => data.no === row.no ? {
          no : data.no,
          name : data.name
        } : row))
    }
    else {
      setDataList(dataList => dataList.concat(
        {
          no : nextNo.current,
          name : data.name,
        }
      ))
      nextNo.current += 1;
    }    
  }

  const handleRemove = (no) => {
    setDataList(dataList => dataList.filter(item => item.no !== no));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      no : item.no,
      name : item.name,
    };
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn(false);
  }
  return (
    <div>
      <Label
        size="lg"
        style={{ marginLeft: "15px", marginTop: "20px", marginBottom: "10px" }}
      >
        채팅방 목록
      </Label>
      <Button
        style={{ marginTop: "22px" }}
        color="gray"
        outline
        className="float-end"
        onClick={toggle}
      >
        <RiChatNewFill size={30}/>
      </Button>
      <Post onSaveData={handleSave} />
      <Table>
        <Cr dataList={dataList} handleRemove={handleRemove} handleEdit={handleEdit}/>
      </Table>
      {
        modalOn && <ModifyModal selectedData={selected} 
        color="gray"
        outline
        handleCancel={handleCancel} handleEditSubmit = {handleEditSubmit}/>
      }
    </div>
  );
};

export default ChatRoomList;