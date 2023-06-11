import React, { useState } from "react";
import Modal2 from "react-modal";

Modal2.setAppElement("#root");

const Signup = ({ users, setUsers, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSignup = () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      name.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      setShowError(true);
    } else {
      const isDuplicate = users.some((user) => user.email === email);
      if (isDuplicate) {
        setShowError(true);
      } else {
        setShowError(false);
        const newUser = { email, password, name, phoneNumber };
        setUsers([...users, newUser]);
        setShowSuccess(true);
        setEmail("");
        setPassword("");
        setName("");
        setPhoneNumber("");
      }
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    onSuccess();
  };

  const closeErrorModal = () => {
    setShowError(false);
  };

  return (
    <div className="Signup">
      <h2>회원가입</h2>
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
      <input
        className="Input"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="이름"
      />
      <input
        className="Input"
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="전화번호"
      />
      <> </>
      <button className="action-button" onClick={handleSignup}>
        가입하기
      </button>

      <Modal2
        className="SignupSuccess"
        isOpen={showSuccess}
        onRequestClose={closeSuccessModal}
        contentLabel="가입 성공 모달"
        shouldCloseOnOverlayClick={false}
      >
        <p>회원가입이 성공적으로 완료되었습니다!</p>
        <button className="action-button" onClick={closeSuccessModal}>
          닫기
        </button>
      </Modal2>

      <Modal2
        className="Failed"
        isOpen={showError}
        onRequestClose={closeErrorModal}
        contentLabel="입력 오류 모달"
        shouldCloseOnOverlayClick={false}
      >
        {users.some((user) => user.email === email) ? (
          <p>이미 존재하는 이메일입니다. 다른 이메일을 사용해주세요.</p>
        ) : (
          <p>모든 필드를 입력해주세요.</p>
        )}
        <button className="action-button" onClick={closeErrorModal}>
          닫기
        </button>
      </Modal2>
    </div>
  );
};

export default Signup;
