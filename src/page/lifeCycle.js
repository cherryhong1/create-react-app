import React, { PureComponent } from 'react'
function loginTime(WrapCom){
  return class extends PureComponent{
    UNSAFE_componentWillMount() {
      this.begin = Date.now()
    }
    componentDidMount() {
      this.end = Date.now()
      const interval = this.end-this.begin
      console.log(`wrapCom渲染使用时间interval`, interval)
    }
    render() {
      return (
        <WrapCom {...this.props}></WrapCom>
      )
    }
  }
}
function Home() {
  return (
    <div>
      <h2>home</h2>
    </div>
  )
}
function Detail() {
  return (
    <div>
      <h3>detail</h3>

    </div>
  )
}
const HomeLoginTime= loginTime(Home)
const DetailLoginTime = loginTime(Detail) 
export default class lifeCycle extends PureComponent {
  render(){
    return (
      <div>
        <HomeLoginTime></HomeLoginTime>
        <DetailLoginTime></DetailLoginTime>
      </div>
    )
  }
}
