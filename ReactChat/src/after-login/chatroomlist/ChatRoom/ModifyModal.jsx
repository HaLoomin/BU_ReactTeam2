import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";

const ModifyModal = ({ selectedData, handleCancel, handleEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const onCancel = () => {
    handleCancel();
  };

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  };

  return (
    <Form onSubmit={onSubmitEdit}>
      <Input
        name="name"
        placeholder="채팅방 이름 수정"
        onChange={onEditChange}
      />
      <>
        <Button type="submit">수정</Button>
        <Button onClick={onCancel}>취소</Button>
      </>
    </Form>
  );
};

export default ModifyModal;
