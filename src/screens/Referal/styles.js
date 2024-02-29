import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  subContainer: {
    padding: 20,
  },

  heading: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },

  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    // borderWidth: 2,
  },

  txtInputHeading: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  txtInput: {
    borderRadius: 8,
    borderWidth: 0.2,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#0A49755E',
  },

  referralHeading: {
    marginLeft: 10,
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },
  name: {
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
  },
  Date: {
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  subContainerItem: {
    flexDirection: 'row',
     justifyContent: 'space-between',
     marginBottom: 3,
    },
    email:{
      color: '#000000',
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    },
    referralItem:{
      // flex: 1,
      margin: '3%',
      padding: 10,
      backgroundColor: '#fff',
      elevation: 7,
      shadowColor: '#000040',
    }
});
