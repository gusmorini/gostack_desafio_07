import React from 'react';
import {Text, StatusBar} from 'react-native';
import colors from './styles/colors';
import Routes from './routes';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={colors.dark} barStyle={'light-content'} />
      <Routes />
    </React.Fragment>
  );
};

export default App;
