import React,{ Component } from "react"
import UserContext from "./createContext"
export default class ProfileHeader extends Component {
 render() {
   return (
     <div>
      <UserContext.Consumer>
        {
          value=>{
            return (
              <div>
                {value.nickName} ---{value.age}
              </div>
            )
          }
        }
      </UserContext.Consumer>
     </div>
   )
 }
}
