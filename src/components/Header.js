import React, {Component} from "react"
import Propsitem from "./children"
import Navlist from "./Navlist"
export default class Header extends Component{
  constructor() {
    super()
    this.state={
      
    }
  }
  render() {
    const leftSlot = <div>左边</div>
    const centerSlot = <div>中间</div>
    const rightSlot = <div>右边</div>
    return (
      <div>
        我是头部
        <Propsitem>
          <div>左侧</div>
          <div>中间</div>
          <div>右边</div>
        </Propsitem>
        <Navlist leftSlot={leftSlot} centerSlot={centerSlot} rightSlot={rightSlot}></Navlist>
      </div>
    )
  }
}