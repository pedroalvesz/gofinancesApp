import React from 'react';
import { Alert, Platform } from "react-native"
import { 
Container,
Header,
Title,
SubTitle,
Footer,
FooterWrapper,
} from './styles';

import { SignInButton } from '../../Components/SignInButton';

import { useAuth } from '../../hooks/useAuth';

import LogoSvg from '../../assets/Logo.svg'
import GoogleSvg from '../../assets/google.svg'
import AppleSvg from '../../assets/apple.svg'

export function SignIn() {
  const {googleSignIn, appleSignIn} = useAuth()

  async function handleGoogleSignIn() {
    try {
      return await googleSignIn()
    } catch (error) {
      Alert.alert("Opa", error.message)
    }
  }

  async function handleAppleSignIn() {
    try {
      return await appleSignIn()
    } catch (error) {
      Alert.alert("Opa", error.message)
    }
  }


  return (
    <Container>
      <Header>
        <LogoSvg/>
        <Title>
        Controle suas
        finanças de forma
        muito simples
        </Title>

        <SubTitle>
        Faça seu login com
        uma das contas abaixo
        </SubTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInButton
          title="Entrar com Google"
          svg={GoogleSvg}
          onPress={handleGoogleSignIn}
          />

          {
            Platform.OS === 'ios' &&
            <SignInButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleAppleSignIn}
            />
          }
        </FooterWrapper>
      </Footer>
    </Container>
  );
}