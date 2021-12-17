import { createContext } from "react";
const UserContext = createContext({
  nickName: "默认",
  age: 1,
});
export default UserContext;
