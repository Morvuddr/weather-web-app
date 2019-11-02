import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../redux';
import thunk from 'redux-thunk';



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));