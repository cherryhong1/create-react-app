import  {PureComponent} from "react"
function loginAuth(Page){
  return props=>{
    if(props.isLogin){
      return <Page></Page>
    }else{
      return <LoginPage></LoginPage>
    }
  }
}
function LoginPage() {
  return <h2>LoginPage</h2>
}
function CartPage(){
  return <h2>CartPage--auth</h2>
}
const LoginCartAuth = loginAuth(CartPage)
export default class App extends PureComponent{
  render() {
    return (
      <div>
        <LoginCartAuth isLogin={true}></LoginCartAuth>
      </div>
    )
  }
}
