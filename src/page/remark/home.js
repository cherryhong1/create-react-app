import React, { PureComponent } from 'react'
import Remark from './Remark'
import TextAreaCom from './TextArea'
import request from "../../http/request"
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
    request({
      url:'/get',
      params:comment,
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    // request({
    //   url:"/post",
    //   data:comment,
    //   methods: "post",
    // }).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
  }
}
