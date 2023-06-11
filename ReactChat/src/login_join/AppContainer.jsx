import React, { useState } from "react";
import Modal from "react-modal";
import Login from "./Login";
import Signup from "./Signup";

import Logo from "../resource/image/logo/ReactChat_logo_new.png";

import "./AppContainer.css";
import "./Login.css";

Modal.setAppElement("#root");

const AppContainer = (props) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [signupData, setSignupData] = useState(null);

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

  const handleLoginSuccess = (user) => {
    setLoggedIn(true);
    props.handleLoginSuccess(user);
    props.PageChange();
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleSignupSuccess = (data) => {
    setSignupData(data);
    closeSignUpModal();
  };

  return (
    <div className="modal_body">
      <img id="main_logo" src={Logo} />

      {!isLoggedIn ? (
        <>
          <button className="action-button" onClick={openLoginModal}>
            로그인
          </button>
          <button className="action-button" onClick={openSignUpModal}>
            회원가입
          </button>
        </>
      ) : (
        <button className="action-button" onClick={handleLogout}>
          로그아웃
        </button>
      )}

      <Modal
        className="Login"
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="로그인 모달"
      >
        <Login
          users={users}
          onSuccess={handleLoginSuccess}
          signupData={signupData}
        />{" "}
      </Modal>

      <Modal
        className="Signup"
        isOpen={isSignUpModalOpen}
        onRequestClose={closeSignUpModal}
        contentLabel="회원가입 모달"
      >
        <Signup
          users={users}
          setUsers={setUsers}
          onSuccess={handleSignupSuccess}
        />
      </Modal>
    </div>
  );
};

export default AppContainer;
