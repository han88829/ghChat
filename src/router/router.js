import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bundle from "./Bundle";

// import Home from 'bundle-loader?lazy&name=home!../pages/Home/Home';
// import Page1 from 'bundle-loader?lazy&name=page1!../pages/Page1/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!../pages/Counter/Counter';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!../pages/UserInfo/UserInfo';
import HomePageList from "bundle-loader?lazy&name=HomePageList!../pages/HomePageList";
import Register from "bundle-loader?lazy&name=Register!../pages/Register";
import Login from "bundle-loader?lazy&name=Register!../pages/Login";
import Robot from "bundle-loader?lazy&name=Robot!../pages/Robot";


const Loading = function() {
  return <div>Loading...</div>;
};

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

const getRouter = () => (
  <Router>
    <div>
      {/* <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul> */}
      <Switch>
        <Route exact path="/" component={createComponent(HomePageList)}/>
        <Route path="/register" component={createComponent(Register)} />
        <Route path="/login" component={createComponent(Login)} />
        <Route path="/robot" component={createComponent(Robot)} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;
