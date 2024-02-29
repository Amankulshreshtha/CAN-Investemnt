import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: 20,
  },

  changePassTxt: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },

  passTxt: {
    fontSize: 18,
    marginTop: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 0.2,
  },

  btn: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#FFBD59',
  },

  btnTxt: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
