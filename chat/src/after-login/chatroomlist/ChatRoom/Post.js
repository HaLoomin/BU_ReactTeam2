//채팅방 만들기
import React, {useState} from 'react'
import {Button,Form,Input} from 'reactstrap';


const Post = ({onSaveData}) => {
  const [form, setForm] = useState({
    name : '',
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
        ...form,
        [name] : value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    setForm({ //초기화
        name : '',
    })
  }
    return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input 
          required placeholder='채팅방 이름 입력' 
          name = 'name' 
          value = {form.name} 
          onChange={handleChange} 
        />
        <Button type='submit'>저장</Button>
      </Form>
    </>
  );
};

export default Post

