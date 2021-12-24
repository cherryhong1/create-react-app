import React, { PureComponent, createContext } from "react";
const UserContext = createContext({
  nickName: "默认",
  level: 1,
});
function WithUser(WrapperCpn) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(value) => {
          return <WrapperCpn {...props} {...value}></WrapperCpn>;
        }}
      </UserContext.Consumer>
    );
  };
}

function Header(props) {
  const { nickName, level } = props;
  return <h2>header {"昵称：" + nickName + "水平" + level}</h2>;
}

function Footer(props) {
  const { nickName, level } = props;
  return <h2>Footer {"昵称：" + nickName + "水平" + level}</h2>;
}
const UserHeader = WithUser(Header);
const UserFooter = WithUser(Footer);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickName: "code", level: 9 }}>
          <UserHeader></UserHeader>
          <UserFooter></UserFooter>
        </UserContext.Provider>
      </div>
    );
  }
}
