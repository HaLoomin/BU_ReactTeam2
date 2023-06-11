import React from "react";
import { useContext } from "react";
import { AiOutlineForm, AiOutlineCloseSquare } from "react-icons/ai";
import { Button, Label } from "reactstrap";
import { Table } from "react-bootstrap";

import { ChatSelContext } from "../../Layout";

const RemoveEdit = ({ item, handleRemove, handleEdit }) => {
  let chatSel = useContext(ChatSelContext);

  const onRemove = () => {
    let result = window.confirm("채팅방을 삭제하시겠습니까?");
    if (result) {
      handleRemove(item.no);
    }
  };

  const onEdit = () => {
    handleEdit(item);
  };

  const selChatRoom = () => {
    chatSel.changeChat(item.no, item.name);
  };

  return (
    <>
      <Table>
        <Label style={{ width: "70%" }} onDoubleClick={selChatRoom}>
          {item.name}
        </Label>
        <Button
          style={{ width: "10%", marginLeft: "10px" }}
          color="gray"
          outline
          onClick={onEdit}
        >
          <AiOutlineForm size={20} />
        </Button>
        <Button
          style={{ width: "10%", marginLeft: "10px" }}
          color="gray"
          outline
          onClick={onRemove}
        >
          <AiOutlineCloseSquare size={20} />
        </Button>
      </Table>
    </>
  );
};

export default RemoveEdit;
