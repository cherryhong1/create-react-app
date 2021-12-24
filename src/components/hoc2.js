import React,{PureComponent,createContext, useCallback} from "react";
import enhanceProps from "../utils/hoc";
const UserConText = createContext({
  nickName:'默认',
  level:-1
})

function Header(props) {
  return (
    <UserConText.Consumer>
      {
        value=>{
          const  {nickName,level} = value
          return <h2>Header {"昵称：" + nickName+"水平："+level}</h2>
        }
      }
    </UserConText.Consumer>
  )
}
function Footer(props){
  return (
    <UserConText.Consumer>
      {
        value=>{
          const  {nickName,level} = value
          return <h2>Footer {"昵称：" + nickName+"水平："+level}</h2>
        }
      }
    </UserConText.Consumer>
  )
}
const EnhanceHeader = enhanceProps(Header,{Header:1.88})

export default  class App extends PureComponent{
  render() {
    return (
      <div>
        <UserConText.Provider value={{nickName:'coder',level:19}}>
          <Header></Header>
          <Footer></Footer>
        </UserConText.Provider>
      </div>
    )
  }
}