import React from 'react';
import {Provider} from 'react-redux';
import {Text, StatusBar} from 'react-native';
import colors from './styles/colors';
import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.dark} barStyle={'light-content'} />
      <Routes />
    </Provider>
  );
};

export default App;
