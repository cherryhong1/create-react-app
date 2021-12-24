function enhanceProps(wrappercon,otherProps){
  return props=><wrappercon {...props} {...otherProps}></wrappercon>
}
export default enhanceProps