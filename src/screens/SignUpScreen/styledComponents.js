import styled from 'styled-components';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

export const Container = styled(KeyboardAvoidingView)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const Banner = styled(Image)`
  height: 30%;
  z-index: 999;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const BottomContainer = styled(View)`
  height: 70%;
  width: 100%;
  background-color: white;
  padding: 20px;
  align-items: center;
`;

export const Heading = styled(Text)`
  color: #f57154;
  font-weight: 700;
  font-size: 28px;
  margin-right: auto;
`;

export const FieldsContainer = styled(View)`
  margin-right: auto;
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const ButtonContainer = styled(View)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 90%;
`;

export const SignUpTextContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  width: 100%;
`;

export const SignUpText = styled(Text)`
  font-size: 19px;
  color: #f57154;
`;

export const WarningText = styled(Text)`
  color: red;
  font-size: 15px;
`;
