import React from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components';
import UserInfo from './components/userInfo';
import Header from './components/header';

const FlexOne = styled.View`
  flex: 1;
`;

const MainScrollView = styled.ScrollView``;
const SafeArea = styled.SafeAreaView`
  flex: 1
`;

export default class Source extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userData: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userJson => {
        this.setState({
          isLoading: false,
          userData: userJson,
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  render() {
    const {
      state: { isLoading, userData },
    } = this;
    if (isLoading) {
      return (
        <FlexOne justifyContent='center'>
          <ActivityIndicator size="large" color="#000" />
        </FlexOne>
      );
    }
    return (
      <SafeArea>
        <Header
          pageName="My App"
        />

        <FlexOne>
          <MainScrollView>
            {userData.map((user, index) => {
              const {
                name,
                email,
                company: { name: companyName },
              } = user;
              return (
                <UserInfo
                  key={`userInfo${index}`}
                  userName={name}
                  userEmail={email}
                  userCompanyName={companyName}
                />
              );
            })}
          </MainScrollView>
        </FlexOne>
      </SafeArea>
    );
  }
}