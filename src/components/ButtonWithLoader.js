import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const ButtonwithLoader = ({text, onPress, loading = false}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.textStyle}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonwithLoader;

const styles = StyleSheet.create({
  btnStyle: {
    height: 52,
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#f57154',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
  },
});
