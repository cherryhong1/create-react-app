import React, {Component,memo} from "react"
const ProductList = memo(function(){
  console.log('ProductList 被调用了')
  return (
    <div>我是ProductList</div>
  )
})

export default ProductList