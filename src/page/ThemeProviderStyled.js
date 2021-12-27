import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
const ProfileWrapper = styled.div`
  color:${props=>props.color};
  font-size:${props=>props.fontSize}
`
export default class ThemeProviderStyled extends PureComponent {
  render() {
    return (
      <div>
        <ThemeProvider theme={{color:'red', fontSize:'30px'}}>
          <ProfileWrapper>
            <div>ThemeProvider</div>
          </ProfileWrapper>
        </ThemeProvider>
      </div>
    )
  }
}
