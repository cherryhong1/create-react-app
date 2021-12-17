import React, { Component } from "react";
import Profile from "./Profile";
import UserContext from "./createContext"
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
