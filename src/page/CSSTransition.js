import { CSSTransition, SwitchTransition,TransitionGroup  } from "react-transition-group";
import { Button, Avatar, Card, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { PureComponent } from "react";
import "../style/csstransition.css";
const { Meta } = Card;

export default class CSSTransitionCom extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowCard: true,
      friends:[]
    };
  }
  render() {
    const { isShowCard,friends } = this.state;
    return (
      <div>
        <Button
          type="primary"
          onClick={(e) => this.setState({ isShowCard: !isShowCard })}
        >
          显示/隐藏
        </Button>
        <CSSTransition
          in={isShowCard}
          classNames="card"
          timeout={1000}
          unmountOnExit={true}
          onEnter={(el) => console.log("进入动画前")}
          onEntering={(el) => console.log("进入动画")}
          onEntered={(el) => console.log(`进入动画后`)}
          onExit={(el) => console.log("退出动画前")}
          onExiting={(el) => console.log("退出动画")}
          onExited={(el) => console.log("退出动画后")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                alt="example"
              ></img>
            }
            actions={[
              <div>
                <SettingOutlined key="settings"></SettingOutlined>
                <EditOutlined key="edit"></EditOutlined>
                <EllipsisOutlined key="ellipsis"></EllipsisOutlined>
              </div>,
            ]}
          >
            <Meta
              title="card title"
              description="this is description"
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></Avatar>
              }
            ></Meta>
          </Card>
        </CSSTransition>
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames="btn"
            timeout={400}
            key={isShowCard ? true : false}
          >
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </CSSTransition>
        </SwitchTransition>
        <TransitionGroup>
          {
            friends.map((item, index) => {
              return (
                <CSSTransition classNames="friend" timeout={300} key={index}>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <Button onClick={e=>this.insertBtn()}>插入朋友</Button>
      </div>
    );
  }
  insertBtn(){
    this.setState({
      friends:[...this.state.friends,'coderwhy']
    })
  }
}
