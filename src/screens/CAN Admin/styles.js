import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  subContainer: {
    padding: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  txtInput: {
    flex: 1,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  sendBtn: {
    position: 'absolute',
    right: 15,
  },

  chatsContainer: {
    // backgroundColor: 'red',
  },

  myMsgContainer: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },

  otherMsgContainer: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    alignItems: 'flex-start',
  },

  myTxtContainer: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(10, 73, 117, 0.1)',
  },

  otherTxtContainer: {
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(218, 218, 218, 0.38)',
  },

  message: {
    fontSize: 18,
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Nunito-Regular',
  },
});
