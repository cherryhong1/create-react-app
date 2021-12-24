import { PureComponent } from "react/cjs/react.production.min";
import Hoc2 from "./hoc2"
import Hoc3 from "./hoc3"
 class Header extends PureComponent{
  render() {
    const {name,age} = this.props;
    return (
      <div>header--{name} ---{age}</div>
    )
  }
}
export default class Hoc extends PureComponent{
  render() {
    return (
      <div>
        <Hoc3></Hoc3>
        <Hoc2></Hoc2>
        <Header name="why" age={18}></Header>
      </div>
    )
  }
}