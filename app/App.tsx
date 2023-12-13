import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import {AppStack} from './navigators/app-stack';

export const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
