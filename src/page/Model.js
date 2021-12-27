import  { PureComponent } from 'react'
import ReactDOM from 'react-dom'

export default class Model extends PureComponent {

  render() {
    return ReactDOM.createPortal(this.props.children,document.getElementById('modal'))
  }
}
