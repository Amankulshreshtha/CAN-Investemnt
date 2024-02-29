import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    top: -70,
    zIndex: 99,
    flex: 1,
    margin: 15,
    padding: 30,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 0,
    elevation: 10,
    borderRadius: 30,

    marginBottom: '60%',
  },

  // headContainer: {
  //   flex: 0.4,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#0A4975',
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  // },

  forgotContainer: {
    flex: 0.28,
    margin: 20,
    padding: 20,
    // position: 'absolute',
    borderRadius: 20,
    shadowColor: 'green',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: -55,
  },

  txtInputHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'Nunito',
  },

  txtInput: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 0.2,
    paddingLeft: 20,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn1: {
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#FFBD59',
  },

  btn2: {
    width: '45%',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#00000040',
  },

  btnTxt: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },
});
