import {Component} from "react"
import eventBus from "../utils/eventBus"
export default class ProfileHeaderEvent extends Component{
  render() {
    return (
      <div>
        <button onClick={e=>this.btnClick()}>按钮</button>
      </div>
    )
  }
  btnClick() {
    eventBus.emit('btnClick','why',18)
  }
}