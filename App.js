import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
// import CalendarScreen from '@screens/Calendar/Calendar';
import InvestStackNavigation from '@Navigation/InvestStackNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <InvestStackNavigation />;
};

export default App;
