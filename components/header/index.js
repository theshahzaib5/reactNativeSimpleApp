import React from 'react';
import styled from 'styled-components';

import HAMBURGER from "../../images/hamburger.png"
import SEARCH from "../../images/search.png"

const HeaderContainer = styled.View`
  backgroundColor: #000;
  paddingVertical: 10;
  flexDirection: row;
  alignItems: center;
  paddingHorizontal: 25;
`;

const HamburgerContainer = styled.TouchableOpacity`
  maxWidth: 20
`

const CustomImage = styled.Image`
  maxWidth: 100%;
  resizeMode: contain;
`
const CustomText = styled.Text`
  fontSize: 20;
  fontWeight: bold;
  color: #fff;
  textAlign: center;
  flex: 1;
`
export default class Header extends React.Component {
  render() {
    const {
      props: { pageName },
    } = this;

    return (
      <HeaderContainer>
        <HamburgerContainer>
          <CustomImage source={HAMBURGER} />
        </HamburgerContainer>

        <CustomText>{pageName}</CustomText>

        <HamburgerContainer>
          <CustomImage source={SEARCH} />
        </HamburgerContainer>
      </HeaderContainer>
    );
  }
}
