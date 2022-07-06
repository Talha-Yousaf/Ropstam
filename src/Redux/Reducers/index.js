import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from "redux-persist";
import Auth from './Auth'
import Config from './Config'
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["user","isLogin"]
  };
export default combineReducers({
    Auth: persistReducer(persistConfig,Auth),
    Config: Config
});
