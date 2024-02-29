import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  subContainer: {
    padding: 20,
  },

  heading: {
    marginBottom: 10,
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  dataContainer: {
    padding: 20,
    elevation: 5,
    shadowRadius: 2,
    borderRadius: 10,
    marginBottom: 10,
    shadowOpacity: 0.8,
    shadowColor: '#00000040',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 2},
  },

  title: {
    fontSize: 20,
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  text: {
    fontSize: 16,
    paddingTop: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
});
