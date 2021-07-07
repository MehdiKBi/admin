import "./App.css";
import React from "react";
import LoginPage from "./component/Login/LoginPage";
import SideBar from "./component/Sidebar/sidebar";







function App() {
  return (
    <div className="App">
      <div className="login-Page-box">
        <LoginPage />
        {/* <SideBar/> */}
      </div>
   
    </div>
  );
}

export default App;
