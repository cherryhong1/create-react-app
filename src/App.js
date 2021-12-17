import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ContextProfile from "./context/ProfileApp"
import ProfileMul from "./context/ProfileMul"
import ProfileAppEvent from "./Event/ProfileApp";
import PureComTest from "./components/PureCompTest";
import "./style/index.css"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <ContextProfile></ContextProfile>
        <ProfileMul></ProfileMul>
        <ProfileAppEvent></ProfileAppEvent>
        <PureComTest></PureComTest>
      </div>
    );
  }
}
