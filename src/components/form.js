import { PureComponent } from "react";
export default class form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      article:'',
      hobby:[],
      gender:"",
      work:''
    }
  }
  render() {
    const { username,article, hobby, gender,work } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名
            <input type="text" 
                   id="username" 
                   onChange={e => this.handleUsernameChange(e)} 
                   value={username}/>
          </label>
          <label htmlFor="gender">
            性别
          <input type="radio" value="男" id="gender" name="gender" onChange={e=>this.handlerGenderChange(e)}></input>
          <input type="radio" value="女"  name="gender" ></input>
          </label>
          <label htmlFor="gender">
            工作
            <input type="checkbox" value="篮球" name="basketball" onChange={e=>this.handlerHobbyChange(e)}></input>
            <input type="checkbox" value="足球" name="basketball"></input>
          </label>
          <label htmlFor="work">
            工作
            <select value={work} onChange={e=>this.handlerWorkChange(e)}>
              <option value="工人">工人</option>
              <option value="农民">农民</option>
            </select>
          </label>
          <label htmlFor="article">
            文章
            <textarea value={article} onChange={e=>this.handleArticleChange(e)}>
            </textarea>
          </label>
          <input type="submit" value="提交"></input>
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleArticleChange(e) {
    this.setState({
      article:e.target.value
    })
  }
  handlerWorkChange(e){
    this.setState({
      work:e.target.value
    })
  }
  handlerGenderChange(e) {
    this.setState({
      gender:e.target.checked
    })
  }
  handlerHobbyChange(e) {
    this.setState({
      gender:e.target.checked
    })
  }
}
