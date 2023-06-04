import React from "react";
import axios from "axios";

const testaxios = (props) => {
  return (
    <div>
      <button onClick={TestPost}>데이터 전송</button>
      <button onClick={TestGet}>데이터 받기</button>
      <button onClick={GetList}>데이터 리스트 받기</button>
    </div>
  );
};

const TestPost = async () => {
  try {
    //응답 성공
    const response = await axios.post("/user/join", {
      //보내고자 하는 데이터
      userId: "devstone",
      password: "12345",
    });
    console.log(response.data);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
};

const TestGet = async () => {
  try {
    //응답 성공
    const response = await axios.get("/user/finduser/yyy");
    console.log(response);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
};
const GetList = async () => {
  try {
    //응답 성공
    const response = await axios.get("/member/finduser/devstone");
    console.log(response.data[5]);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
};

export default testaxios;
