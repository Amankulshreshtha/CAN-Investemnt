import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

const CustomAlert = ({message, onClose}) => {
  return (
    <Modal
      transparent={true}
      visible={true}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.alertContainer}>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonheader}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  message: {
    fontSize: 19,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000A8',
    fontFamily: 'Nunito-Medium ',
  },
  closeButton: {
    fontSize: 16,
    color: '#000000',

    alignSelf: 'center',
  },
  buttonheader: {
    backgroundColor: '#FFBD59',
    width: '100%',
    padding: 5,
  },
});

export default CustomAlert;
