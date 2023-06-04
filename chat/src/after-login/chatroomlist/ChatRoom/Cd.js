//채팅방 수정, 삭제
import React from 'react'
import { AiOutlineForm, AiOutlineCloseSquare } from "react-icons/ai";
import {Button,Label} from 'reactstrap';
import {Table} from 'react-bootstrap';

const Cd = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.no)
    }

    const onEdit = () => {
        handleEdit(item);
    }
    return (
    <>
    <Table>
        <Label style={{width : "80%"}}>{item.name}</Label>
        <Button
            color="gray"
            outline
            onClick={onEdit}
            show-Modal
        >
            <AiOutlineForm size={20} />
        </Button>
        <Button
            color="gray"
            outline
            onClick={onRemove}
            show-Modal
        >
            <AiOutlineCloseSquare size={20} />
        </Button>
    </Table>
    </>
  )
};

export default Cd