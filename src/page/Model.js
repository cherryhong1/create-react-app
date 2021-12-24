import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class Model extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return ReactDOM.createPortal(this.props.children,document.getElementById('modal'))
  }
}
