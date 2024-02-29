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
    borderWidth: 1,
    paddingLeft: 20,
    // backgroundColor: 'red',
    borderColor: '#0A49755E',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn1: {
    width: '45%',
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
