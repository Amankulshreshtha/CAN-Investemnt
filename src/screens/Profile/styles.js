import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    padding: 20,
  },

  profileTxt: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  profileContainer: {
    width: 90,
    height: 90,
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 0.2,
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },

  icon: {
    position: 'absolute',
    alignSelf: 'center',
  },

  inputContainer: {
    marginTop: 10,
  },

  txtInputHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    borderRadius: 8,
    paddingLeft: 10,
    width: '100%',
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#0A49755E',
  },

  dobView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A49755E',
    paddingLeft: 5,
  },

  updateBtn: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#FFBD59',
  },

  updateBtnTxt: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
  Image: {
    marginRight: 10,
  },
});
