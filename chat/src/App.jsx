import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

//오류로 인한 로그인 페이지 주석처리
//import FirstPage from "./login_join/AppContainer"
import Layout from "./after-login/layout";

const App = () => {
  //페이지 이동 원할 시 해당 값 수정
  const [page, setPage] = useState("AfterLogin");

  const PageChange = () => {
    setPage("AfterLogin");
  }

  switch (page) {
    //오류로 인한 로그인 페이지 주석처리
    // case "First": {
    //    return <div><FirstPage LoginSucess={PageChange}/></div>;
    // }
    case "AfterLogin": {
      return (
        <div>
          <Layout />
        </div>
      );
    }
  }

};


export default App;
