import React ,{Component} from 'react'
export default class TabControl extends Component{
  constructor(props) {
    super()
    this.props = props
    this.state={
      curIndex : 0
    }
  }
  render() {
    const  {title} = this.props
    const  {curIndex} = this.state
    return (
      <div className='tab-list'>
        {title.map((item,index)=>{
          return <span onClick={e =>this.itemClick(index)} key={index} className={"tab-item "+ (index===curIndex?'active':'')}>{item}</span>
        })}
      </div>
    )
  }
  itemClick(index){
    this.setState({
      curIndex:index
    })
    this.props.itemClick(index)
  }
}
