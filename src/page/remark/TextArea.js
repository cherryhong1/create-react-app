import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import moment from "moment"
const { TextArea } = Input;
export default class TextAreaCom extends PureComponent {
  state = {
    value: "",
  };
  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  onSubmit = ()=>{
    const commentInfo = {
      id: Date.now(),
      name: "coderwhy",
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      content: <p>{this.state.value}</p>,
      datetime: moment()
    }
    this.props.submitComment(commentInfo)
    this.setState({
      value:''
    })
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="发表评论"
          autoSize
        />
        <Button type="primary" onClick={e=>this.onSubmit()}>发表评论</Button>
      </div>
    );
  }
}
