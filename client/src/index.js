import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import './index.css';

//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister();


const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk), 
  window.devToolsExtension ? window.devToolsExtension() : f => f ))

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
document.getElementById('root')
);


