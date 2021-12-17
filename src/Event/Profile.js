import { Component } from "react";
import ProfileHeaderEvent from "./ProfileHeader";
export default class Profile extends Component{
  render() {
    return (
      <div>
        <ProfileHeaderEvent></ProfileHeaderEvent>
        <h4>我是事件</h4>
      </div>
    )
  }
}