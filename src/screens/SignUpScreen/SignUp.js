import React from 'react';
import BG from '../../assets/background.jpeg';
import ButtonwithLoader from '../../components/ButtonWithLoader';
import {View, Text} from 'react-native';
import TextInputWithLabel from '../../components/InputText';
import {
  Container,
  Banner,
  BottomContainer,
  Heading,
  FieldsContainer,
  ButtonContainer,
  SignUpTextContainer,
  SignUpText,
  WarningText,
} from '../SignUpScreen/styledComponents';
import {AuthContext} from '../../navigation/Route';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [validPassword, setValidPassword] = React.useState(true);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validName, setValidName] = React.useState(true);

  const {signUp, returnUser} = React.useContext(AuthContext);

  const validateEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateAndSignUp = () => {
    setValidEmail(true);
    setValidName(true);
    setValidPassword(true);
    if (fullName?.length === 0) {
      setValidName(false);
    }
    if (password?.length < 5) {
      setValidPassword(false);
    }
    if (!validateEmail(email)) {
      setValidEmail(false);
    }
    if (fullName?.length > 0 && password?.length > 5 && validateEmail(email)) {
      signUp({email, password, fullName});
    }
  };

  return (
    <Container behavior="padding">
      <Banner source={BG} />
      <BottomContainer>
        <Heading>Sign Up</Heading>
        <FieldsContainer>
          <TextInputWithLabel
            isValid={validName}
            label="Name"
            value={fullName}
            placeholder="enter your full name"
            onChangeText={text => {
              setFullName(text);
            }}
          />
          <View style={{marginBottom: 10, marginTop: -10}}>
            {!validName ? (
              <WarningText>pls enter a valid name</WarningText>
            ) : null}
          </View>

          <TextInputWithLabel
            isValid={validEmail}
            label="Email"
            value={email}
            placeholder="enter your email"
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <View style={{marginBottom: 10, marginTop: -10}}>
            {!validEmail ? (
              <WarningText>pls enter a valid email</WarningText>
            ) : null}
          </View>
          <TextInputWithLabel
            label="Password"
            isValid={validPassword}
            value={password}
            placeholder="enter your password"
            isSecure
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <View style={{marginBottom: 10, marginTop: -10}}>
            {!validPassword ? (
              <WarningText>pls enter at least 6 characters</WarningText>
            ) : null}
          </View>
        </FieldsContainer>
        <ButtonContainer>
          <ButtonwithLoader
            text="Sign Up"
            loading={false}
            onPress={validateAndSignUp}
          />
        </ButtonContainer>
        <SignUpTextContainer
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <SignUpText>Or, Log In...</SignUpText>
        </SignUpTextContainer>
      </BottomContainer>
    </Container>
  );
};

export default SignUp;
