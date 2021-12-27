import React, { Component } from "react";
// import styled from "styled-components";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import ContextProfile from "./context/ProfileApp"
// import ProfileMul from "./context/ProfileMul"
// import ProfileAppEvent from "./Event/ProfileApp";
// import PureComTest from "./components/PureCompTest";
// import Refs from "./components/refs";
// import FormJs from "./components/form";
// import Form2 from "./components/form2";
// import Form3 from "./components/form3";
// import Hoc from "./components/hoc";
//  import LifeCycle from "./page/lifeCycle";
// import Auth from "./page/auth";
// import Forword from "./page/forword";
// import Fragment1 from "./page/fragment";
// import Model from "./page/Model";
// import ThemeProviderStyled from "./page/ThemeProviderStyled";
import CommentHome from "./page/remark/home"
import CSSTransitionCom from "./page/CSSTransition"
import "./style/index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CSSTransitionCom></CSSTransitionCom>
        <CommentHome></CommentHome>
        {/*<LifeCycle></LifeCycle>
        
        <Hoc></Hoc>
        <Form3></Form3>
        <Form2></Form2>
        <FormJs></FormJs>
        <Refs></Refs>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <ContextProfile></ContextProfile>
        <ProfileMul></ProfileMul>
        <ProfileAppEvent></ProfileAppEvent>
        <PureComTest></PureComTest> 
        <Model>
          <h2>我是标题</h2>
        </Model>
          <ThemeProviderStyled></ThemeProviderStyled>
          <React.StrictMode>
            <Fragment1></Fragment1>
          </React.StrictMode>
          <Auth></Auth>
          <Hoc></Hoc>
        <Forword></Forword>*/}
      </div>
    );
  }
}
