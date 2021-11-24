import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import styled from 'styled-components';

const MyTextInput = styled(TextInput)`
  height: 48px;
  width: 100%;
  border: ${props => (props.isValid ? '1px solid #f57154' : '1px solid red')};
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const TextInputWithLabel = ({
  label,
  value,
  placeholder,
  inputStyle,
  textStyle,
  isSecure = false,
  onChangeText,
  props,
  isValid,
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 8,
          fontWeight: 'bold',
          color: '#f57154',
        }}>
        {label}
      </Text>
      <MyTextInput
        // value={value}
        isValid={isValid}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        placeholderTextColor="gray"></MyTextInput>
    </View>
  );
};

export default TextInputWithLabel;
