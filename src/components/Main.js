import React, {Component} from "react"
import Banner from "./Banner"
import ProductList from "./ProductList"
import ChildCom from "./childCom"
import ChildToParent from "./ChildToParent"
export default class Header extends Component{
  constructor() {
    super()
    this.state={
      count:0
    }
  }
  render() {
    return (
      <div>
        <h3>我是Main</h3>
        <div>
          <ChildToParent state="-1" handler={e=>this.handlerCount(-1)}></ChildToParent>
          {this.state.count}
          <ChildToParent state="1" handler={e=>this.handlerCount(1)}></ChildToParent>
        </div>
        <Banner name="why" age={18} height={1.88}></Banner>
        <ProductList></ProductList>
        <ChildCom name="why" age={18} height={1.88}></ChildCom>
      </div>
    )
  }
  handlerCount(count) {
    this.setState({
      count:this.state.count+count
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState)
    if(nextState.count !==this.state.count) {
      return true
    }
    return false
  }
}