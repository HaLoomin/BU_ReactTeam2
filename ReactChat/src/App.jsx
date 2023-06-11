import { React, useState, createContext } from "react";

import "./App.css";

import FirstPage from "./login_join/AppContainer";
import Layout from "./after-login/Layout";

export const UserInfoContext = createContext();

const App = () => {
  const [page, setPage] = useState("First");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const handleLoginSuccess = (user) => {
    setUserInfo({
      email: user.email,
      name: user.name,
      phone: user.phoneNumber,
    });
    setLoggedIn(true);
  };

  const PageChange = () => {
    setPage("AfterLogin");
  };

  switch (page) {
    case "First": {
      return (
        <div className="backgr">
          <FirstPage
            handleLoginSuccess={handleLoginSuccess}
            PageChange={PageChange}
          />
        </div>
      );
    }
    case "AfterLogin": {
      return (
        <div className="backgr">
          {!isLoggedIn ? (
            <FirstPage handleLoginSuccess={handleLoginSuccess} />
          ) : (
            <UserInfoContext.Provider value={userInfo}>
              <Layout />
            </UserInfoContext.Provider>
          )}
        </div>
      );
    }
  }
};

export default App;
