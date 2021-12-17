import React,{ Component } from "react"
import ProfileHeader from "./ProfileHeader"
export default class Profile extends Component {
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