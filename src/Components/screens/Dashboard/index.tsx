import React from 'react';
import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserImage,
  UserText,
  UserGreeting,
  UserName,
  UserLogout,
 } from './style'


export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={{uri:'https://avatars.githubusercontent.com/u/79289930?v=4'}}/>
            <UserText>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Pedro</UserName>
            </UserText>
          </UserInfo>
          <UserLogout name="power" size ={RFValue(24)}/>
        </UserWrapper>
      </Header>
    </Container>
  )
}