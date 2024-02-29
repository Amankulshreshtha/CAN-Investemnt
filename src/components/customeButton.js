import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  showButtons,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFBD59',
  },

  text: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Nunito-SemiBold',
  },
});
