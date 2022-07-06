import React from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store, persistor} from './Redux/index';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <FlashMessage position="bottom" icon="auto" />
      </PersistGate>
    </Provider>
  );
}
