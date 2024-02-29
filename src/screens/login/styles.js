import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'green',
    marginTop: -55,
    zIndex: 99,
  },

  headContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // marginTop: -40,
    // backgroundColor: 'green',
  },

  loginContainer: {
    flex: 0.5,
    margin: 20,
    marginBottom: '-25%',
    padding: 20,
    // position: 'absolute',
    borderRadius: 20,
    shadowColor: '#000000',
    backgroundColor: '#fff',
    elevation: 5,
  },

  loginHeading: {
    marginBottom: 10,
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Nunito',
  },

  inputContainer: {
    marginBottom: 20,
  },

  txtInputHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },

  inputTxt: {
    flexDirection: 'row',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#0A49755E',
  },

  txtInput: {
    width: '100%',
    borderRadius: 6,
    borderWidth: 0.5,
    paddingLeft: 20,
    borderColor: '#0A49755E',
  },

  eyeIcon: {},

  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  forgotBtn: {},

  btnTxt: {
    fontSize: 14,
    color: '#0A4975',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },

  loginBtn: {
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#FFBD59',
  },

  loginBtnTxt: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
});
