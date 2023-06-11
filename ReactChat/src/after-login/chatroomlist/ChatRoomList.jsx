import React, { useEffect, useState, useRef } from "react";
import { chatList } from "./ChatRoom/ChatRoomData";
import TableData from "./ChatRoom/TableData";
import CreateModal from "./ChatRoom/CreateModal";
import ModifyModal from "./ChatRoom/ModifyModal";
import { RiChatNewFill } from "react-icons/ri";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  Label,
} from "reactstrap";

const ChatRoomList = () => {
  const [dataList, setDataList] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [modalOn1, setModalOn1] = useState(false);

  const toggle = () => {
    setModalOn(!modalOn);
  };

  const toggle1 = () => {
    setModalOn1(!modalOn1);
  };

  const nextNo = useRef(4);

  useEffect(() => {
    setDataList(chatList);
  }, []);

  const handleSave = (data) => {
    if (data.no) {
      setDataList(
        dataList.map((row) =>
          data.no === row.no
            ? {
                no: data.no,
                name: data.name,
              }
            : row
        )
      );
    } else {
      setDataList((dataList) =>
        dataList.concat({
          no: nextNo.current,
          name: data.name,
        })
      );
      nextNo.current += 1;
    }
    setModalOn(false);
  };

  const handleRemove = (no) => {
    setDataList((dataList) => dataList.filter((item) => item.no !== no));
  };

  const handleEdit = (item) => {
    setModalOn1(true);
    const selectedData = {
      no: item.no,
      name: item.name,
    };
    setSelected(selectedData);
  };
  const handleCancel = () => {
    setModalOn(false);
    setModalOn1(false);
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn1(false);
  };

  return (
    <div>
      <Label
        size="lg"
        style={{ marginLeft: "15px", marginTop: "20px", marginBottom: "10px" }}
      >
        채팅방 목록
      </Label>
      <Button
        onClick={toggle}
        style={{ marginTop: "22px" }}
        color="gray"
        outline
        className="float-end"
      >
        <RiChatNewFill size={30} />
      </Button>
      <Modal isOpen={modalOn} toggle={toggle} centered>
        <ModalHeader>채팅방 개설</ModalHeader>
        <ModalBody>
          <CreateModal handleCancel={handleCancel} onSaveData={handleSave} />
        </ModalBody>
      </Modal>
      <Table>
        <TableData
          dataList={dataList}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </Table>
      <Modal isOpen={modalOn1} toggle={toggle1} centered>
        <ModalHeader>채팅방 수정</ModalHeader>
        <ModalBody>
          <ModifyModal
            handleCancel={handleCancel}
            handleEditSubmit={handleEditSubmit}
            selectedData={selected}
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ChatRoomList;
