import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const Login = ({ users, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setShowError(true);
    } else {
      setShowError(false);
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        onSuccess(); // 로그인 성공 시 모달 창 닫기
      } else {
        setShowError(true);
      }
    }
  };

  const closeErrorModal = () => {
    setShowError(false);
  };

  return (
    <div>
      <h2>로그인</h2>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="이메일" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
      <button onClick={handleLogin}>로그인</button>

      <Modal className="app-container"
        isOpen={showError}
        onRequestClose={closeErrorModal}
        contentLabel="로그인 오류 모달"
        shouldCloseOnOverlayClick={false}
      >
        <p>이메일과 비밀번호를 확인해주세요.</p>
        <button onClick={closeErrorModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default Login;
