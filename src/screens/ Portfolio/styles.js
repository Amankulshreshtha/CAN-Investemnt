import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor:'gray',
  },

  subContainer: {
    padding: 15,
  },

  heading: {
    fontSize: 22,
    marginBottom: 10,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },

  itemData: {
    padding: 15,
    elevation: 5,
    shadowRadius: 0,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.4,
    // shadowOpacity: 1,
    shadowColor: 'black',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },

  name: {
    fontSize: 20,
    marginLeft: 10,
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },

  text: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },

  details: {
    fontSize: 14,
    color: '#000000C4',
    fontFamily: 'Nunito-Regular',
  },

  txt: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
});
