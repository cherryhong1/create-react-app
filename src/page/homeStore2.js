import connect from "../common/handleMapCmp"
import {addNumberAction} from "../store/actionCreator"
const mapStateToProps = state=>{
  return {
    counter:state.counter
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    addNumber:function(number){
      dispatch(addNumberAction(number))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)