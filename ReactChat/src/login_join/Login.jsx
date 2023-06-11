import React, { useState } from "react";
import Modal2 from "react-modal";

Modal2.setAppElement("#root");

const Login = ({ users, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setShowError(true);
    } else {
      setShowError(false);
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        onSuccess(user);
      } else {
        setShowError(true);
      }
    }
  };

  const closeErrorModal = () => {
    setShowError(false);
  };

  return (
    <div className="Login">
      <h2>로그인</h2>
      <input
        className="Input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="이메일"
      />
      <input
        className="Input"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
      />
      <button className="action-button" onClick={handleLogin}>
        로그인
      </button>

      <Modal2
        className="Failed"
        isOpen={showError}
        onRequestClose={closeErrorModal}
        contentLabel="로그인 오류 모달"
        shouldCloseOnOverlayClick={false}
      >
        <p>이메일과 비밀번호를 확인해주세요.</p>
        <button className="action-button" onClick={closeErrorModal}>
          닫기
        </button>
      </Modal2>
    </div>
  );
};

export default Login;
