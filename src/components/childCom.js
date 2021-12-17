export default function childCom(props){
  const {name,age,height}  = props
  return (
    <div>
      <h3>我是通过函数组件获取的props的数据</h3>
      <p>{name}--{age}---{height}</p>
    </div>
  )
}
