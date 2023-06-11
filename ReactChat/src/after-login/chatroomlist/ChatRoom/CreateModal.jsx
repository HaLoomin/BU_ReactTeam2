import React, {useState} from 'react'
import {Button,Form,Input} from 'reactstrap';


const Post = ({onSaveData, handleCancel}) => {
  const [form, setForm] = useState({
    name : '',
  });
  
  const onCancel = () => {
    handleCancel();
  }

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    setForm({
        name : '',
    })
  }
    return (
      <Form onSubmit={handleSubmit}>
        <Input 
          name = 'name' 
          required placeholder='채팅방 이름 입력' 
          onChange={handleChange} 
        />
        <>
          <Button type='submit'>저장</Button>
          <Button onClick={onCancel}>취소</Button>
        </>
      </Form>
  );
};

export default Post

