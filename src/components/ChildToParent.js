export default function ChildToParent(props) {
  const { handler, state } = props
  return (
    <div>
      <button onClick={handler}>{state}</button>
    </div>
  )
}