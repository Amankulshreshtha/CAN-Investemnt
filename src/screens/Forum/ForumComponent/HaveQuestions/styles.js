import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  subContainer: {
    marginTop: '10%',
    margin: 10,
    padding: 20,
    // top: -70,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 20,
    elevation: 5,
    // backgroundColor: 'green',
  },

  quesTxt: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: 10,
  },

  txtInputContainer: {
    marginBottom: 10,
  },

  inputTxt: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 0.2,
  },

  helpTxt: {
    fontSize: 16,
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn1: {
    width: '45%',
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 10,
    backgroundColor: '#00000040',
  },

  btn2: {
    width: '45%',
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 10,
    backgroundColor: '#FFBD59',
  },

  btnTxt: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
