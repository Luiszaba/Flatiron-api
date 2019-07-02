import React from 'react';
import App from './App';
import rootReducer from './reducers/manageSongs_Comments';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
//import * as serviceWorker from './serviceWorker';
//serviceWorker.unregister();


const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
        <Provider store={store}>
            <App />
        </Provider>,
document.getElementById('root')
);


