import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 25,
    color: '#000000',
    marginLeft: 5,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
  details: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Nunito-Regular',
    color: '#000000',
  },
  CalendarText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    color: '#000000',
  },
  agendaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 12,
    borderWidth: 0.2,
    // elevation: 2,
  },
  date: {
    fontFamily: 'Nunito-bold',
    fontSize: 20,
    marginBottom: 5,
    color: '#0A4975',
  },
  month: {
    fontFamily: 'Nunito-medium',
    fontSize: 16,
    marginBottom: 5,
    color: '#0A4975',
  },
  eventItem: {
    marginLeft: 10,
  },
  boldText: {
    fontFamily: 'Nunito-Bold',
  },
  DateContainer: {
    flexDirection: 'column',
    borderWidth: 2,
    width: 69,
    margin: 5,
    borderColor: '#0A4975',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Meeting: {
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    color: '#000000',
    marginRight: '15%',
  },
  agenda: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#000000',
    // marginRight: '15%',
  },
  eventSubContainer: {
    flexDirection: 'row',
  },
  event: {marginRight: '20%', marginLeft: 5},
});
