import "./App.css";
import React from "react";
import LoginPage from "./component/Login/LoginPage";
import SideBar from "./component/Sidebar/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Corporate from "./component/Pages/Corporate";
import CheckList from "./component/Pages/CheckList";
import Settings from "./component/Pages/Settings";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/login">
            <div className="login ">
              <div className="inner-login shadow-lg p-3 mb-5 bg-body rounded">
                <LoginPage />
              </div>
            </div>
          </Route>
          <Route exact path="/corporate">
            <Corporate />
          </Route>
          <Route exact path="/checklist">
            <CheckList />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
