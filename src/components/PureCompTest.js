import { PureComponent } from "react";
export default class PureComTest extends PureComponent {
  constructor() {
    super();
    this.state = {
      friends: [
        {
          name: "lili",
          age: 19,
        },
        {
          name: "yiyi",
          age: 18,
        },
        {
          name: "liyi",
          age: 30,
        },
      ],
    };
  }
  render() {
    const { friends } = this.state;
    return (
      <div>
        {friends.map((item, index) => {
          return (
            <li key={index}>
              {item.name} --{item.age}
              <button onClick={e=>this.increaseAge(index)}>age+1</button>
            </li>
           
          );
        })}
        <button onClick={e=>this.insertFriend()}>加入新朋友</button>
      </div>
    );
  }
  increaseAge(index) {
    const newFriends = [...this.state.friends]
    newFriends[index].age+=1
    this.setState({
      friends:newFriends
    })
  }
  insertFriend() {
    const newFriends = [{name:'wang',age:20},...this.state.friends]
    this.setState({
      friends:newFriends
    })
  }
}
