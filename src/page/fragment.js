import React, { PureComponent } from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
const HomeWrapper = styled.div`
  color: ${props=>props.color};
  border: 1px solid red;
  h2 {
    font-size: 20px;
  }
`;
const HYInput = styled.input.attrs({
  placeholder:'请填写密码',
  paddingLeft: props=>props.left||"5px"
})`
  border-color:#456123;
  padding-left:${props=>props.paddingLeft};
  &:focus{
    outline-color:orange
  }
`
const HYButton = styled.button`
 padding:8px 10px;
`
const HYWrapButton = styled(HYButton)`
  background:red;
  color:#231231
`
const HYPrimaryButton = styled(HYButton)`
 background:green;
 color:#fff
`
export default class fragment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-9",
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: "《UNIX编程艺术》",
          date: "2006-2",
          price: 59.0,
          count: 1,
        },
        {
          id: 3,
          name: "《编程珠玑》",
          date: "2008-10",
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: "《代码大全》",
          date: "2006-3",
          price: 128.0,
          count: 1,
        },
      ],
    };
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <HYButton>测试</HYButton>
        <HYWrapButton>确定</HYWrapButton>
        <HYPrimaryButton>取消</HYPrimaryButton>
        <HYInput type="password"></HYInput>
        {books.map((item) => {
          return (
            <div>
            <Fragment key={item.id}>
              <HomeWrapper color="blue">
                <div>
                  <h2>
                    书本
                    {item.name} ---{item.price}
                  </h2>
                  
                </div>
              </HomeWrapper>
            </Fragment>
            </div>
          );
        })}
      </div>
    );
  }
}
