import React, { Component } from "react";

const UserContext = React.createContext({ nickname: "默认", age: -1 })
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <p>{this.context.nickName}---{this.context.age}</p>
      </div>
    )
  }
 }
 ProfileHeader.contextType = UserContext
class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader></ProfileHeader>
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    )
  }
 }
export default class ProfileApp extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{ nickName: "why", age: 19 }}>
          <Profile></Profile>
        </UserContext.Provider>
      </div>
    );
  }
}
