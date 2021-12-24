import React, { PureComponent } from 'react'
import { Fragment } from 'react/cjs/react.production.min'

export default class fragment extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    }

  }
  render() {
    const {books} = this.state
    return (
      <div>
      {
        books.map((item)=>{
          return (
            <Fragment  key={item.id}>
            <div>{item.name} ---{item.price}</div>
            </Fragment>
          )
        })
      }
      </div>
    )
  }
}
