import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';
import Signup from './Signup';

import './AppContainer.css';
import './Login.css';

Modal.setAppElement('#root');

const AppContainer = (props) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    //closeLoginModal();
    props.LoginSucess();
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="modal_body">
      <h1>2팀 대화 서비스</h1>
      {!isLoggedIn ? (
        <>
          <button className="action-button" onClick={openLoginModal}>로그인</button>
          <button className="action-button" onClick={openSignUpModal}>회원가입</button>
        </>
      ) : (
        <button className="action-button" onClick={handleLogout}>로그아웃</button>
      )}

      <Modal className="Login"
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="로그인 모달"
      >
        <Login users={users} onSuccess={handleLoginSuccess} />
        <button className="close-button" onClick={closeLoginModal}>닫기</button>
      </Modal>

      <Modal className="Signup"
        isOpen={isSignUpModalOpen}
        onRequestClose={closeSignUpModal}
        contentLabel="회원가입 모달"
      >
        <Signup users={users} setUsers={setUsers} onSuccess={closeSignUpModal} />
        <button className="close-button" onClick={closeSignUpModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default AppContainer;
