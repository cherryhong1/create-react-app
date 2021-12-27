import React, { PureComponent } from 'react'
import Remark from './Remark'
import TextAreaCom from './TextArea'
export default class home extends PureComponent {
  constructor(props){
    super(props)
    this.state=({
      commentList:[]
    })
   
  }
  render() {
    const {commentList} = this.state
    return (
      <div style={{width:'800px',padding:'20px'}}>
        {
          commentList.map((item,index)=>{
            return  <Remark key={item.id} comment={item} index={index} removeItem={e=>this.removeItem(index)}></Remark>
          })
        }
        <TextAreaCom submitComment={e=>this.submitComment(e)}></TextAreaCom>
      </div>
    )
  }
  removeItem(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index,1)
    this.setState({
      commentList:newCommentList
    })
  }
  submitComment(comment){    
    this.setState({
      commentList:[...this.state.commentList,comment]
    })
  }
}
