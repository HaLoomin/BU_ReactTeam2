import React, {useState} from 'react';
import {Form,Input,Button,} from "reactstrap";

const ModifyModal = ({selectedData, handleCancel, handleEditSubmit}) => {
    const [edited, setEdited] = useState(selectedData);
    const onCancel = () => {
        handleCancel();
    }

    const onEditChange = (e) => {
        setEdited({
            ...edited,
            [e.target.name] : e.target.value    
        })
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleEditSubmit(edited);
    }

    return (
    <div>
        <>
            <Form onSubmit={onSubmitEdit}>
                <Input 
                    name = 'name'
                    placeholder="채팅방 이름"
                    value={edited.name}
                    onChange={onEditChange}
                />
                <div>
                    <Button
                        onClick={onCancel}>취소
                    </Button>
                    <Button 
                        type='submit'>수정
                    </Button>
                </div>
            </Form>
        </>
    </div>
  );
};

export default ModifyModal