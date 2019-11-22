import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.TouchableOpacity`
  borderBottomWidth: 1;
  borderBottomColor: #ccc;
  paddingHorizontal: 25;
  paddingTop: 15;
  paddingBottom: 5;
`;

const CustomText = styled.Text`
  fontSize: 16;
  marginBottom: 10
`
export default class UserInfo extends React.Component {
  render() {
    const {
      props: { userName, userEmail, userCompanyName },
    } = this;

    return (
      <CardContainer>
        <CustomText>User Name: {userName}</CustomText>
        <CustomText>User Email: {userEmail}</CustomText>
        <CustomText>Company Name: {userCompanyName}</CustomText>
      </CardContainer>
    );
  }
}
