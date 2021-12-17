import { Component} from "react";
import Profile from "./Profile";
import eventBus from "../utils/eventBus";
export default class ProfileAppEvent extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      age:0
    }
  }
  render() {
    const {name,age} = this.state
    return <div>
      <Profile></Profile>
      <h2>其他内容{name} {age}</h2>
    </div>;
  }
  componentDidMount() {
    eventBus.addListener('btnClick',this.btnClick)
  }
  componentWillUnmount() {
    eventBus.removeListener('btnClick',this.btnClick)
  }
  btnClick(name,age){
    console.log(name,age)
  }
}
