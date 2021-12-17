import React from "react";
const UserContext = React.createContext({ nickName: "默认", age: -1 });
export default function ProfileHeader(props) {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => {
          return <div>
            <h2>用户昵称{value.nickName}</h2>
            <h2>用户等级{value.age}</h2>
          </div>;
        }}
      </UserContext.Consumer>
    </div>
  );
}
