import React from 'react';
import BG from '../../assets/background.jpeg';
import ButtonwithLoader from '../../components/ButtonWithLoader';
import TextInputWithLabel from '../../components/InputText';
import {AuthContext} from '../../navigation/Route';

import {
  Container,
  Banner,
  BottomContainer,
  Heading,
  FieldsContainer,
  ButtonContainer,
  SignUpTextContainer,
  SignUpText,
} from './styledComponents';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validPassword, setValidPassword] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);
  const {signIn} = React.useContext(AuthContext);

  const signInToApp = () => {
    signIn({email, password});
  };
  return (
    <Container>
      <Banner source={BG} />
      <BottomContainer>
        <Heading>Log In</Heading>
        <FieldsContainer>
          <TextInputWithLabel
            isValid={validEmail}
            label="Email"
            value=""
            placeholder="enter your email"
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <TextInputWithLabel
            isValid={validPassword}
            label="Password"
            value=""
            placeholder="enter your password"
            isSecure
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </FieldsContainer>
        <ButtonContainer>
          <ButtonwithLoader
            text="LOG IN"
            loading={false}
            onPress={signInToApp}
          />
        </ButtonContainer>
        <SignUpTextContainer
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <SignUpText>Or, Sign Up...</SignUpText>
        </SignUpTextContainer>
      </BottomContainer>
    </Container>
  );
};

export default SignIn;
