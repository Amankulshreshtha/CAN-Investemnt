import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  calendarContainer: {
    flex: 0.47,
    marginTop: '0%',
    padding: 10,
  },
  CalendarText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
  subContainerText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#0A4975',
    fontSize: 16,
    padding: 10,
  },
  subContainerUrl: {
    fontFamily: 'Nunito-SemiBold',
    color: '#0A4975',
    fontSize: 16,
    padding: 10,
    // marginRight: 10,
    alignItems: 'flex-start',
    // backgroundColor: 'red',
  },
  subContainer: {
    flex: 0.27,
    marginTop: 0,
  },
  subContainerType: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: 14,
    marginVertical: '1.4%',
    marginLeft: 10,
  },
  subContainerMeetingText: {
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
    fontSize: 16,
    padding: 10,
  },

  subContainerAgenda: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    marginVertical: '1.4%',
    marginLeft: 10,
  },
  itemsMainContainer: {
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: '3%',
    marginTop: 0,
    elevation: 8,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  Image: {
    marginLeft: 10,
    backgroundColor: 'red',
  },
  selectedDateContainer: {
    backgroundColor: '#f0f0f0',
    // marginLeft: 10,
    margin: 10,
  },
  selectedDateText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  topicText: {
    fontFamily: 'Nunito-Bold',
    color: '#000000',
    fontSize: 18,
    marginVertical: '1.4%',
    marginLeft: 10,
  },
});
