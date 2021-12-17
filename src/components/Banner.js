import React, {Component} from "react"
import propTypes from "prop-types"
export default class Header extends Component{
  constructor(props) {
    super()
    this.props = props
  }
  render() {
    const  {name,age,height} = this.props
    return (
      <div>
        <h3>我是Main的内容</h3>
        <p>我的名字{name},年龄{age},身高{height}</p>
      </div>
    )
  }

}
Header.propTypes = {
  name:propTypes.string
}
Header.defaultProps = {
  name:'stranger'
}