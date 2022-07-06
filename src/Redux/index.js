
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';
import {persistStore} from "redux-persist";

export const store = createStore(Reducers, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);