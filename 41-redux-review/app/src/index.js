import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { server } from './server'
import { API_URL } from './constants';
import { history } from './history'


const reducer = (currentState, action) => {
    switch(action.type){
        case 'FETCH_PANDAS':
            server.get(`${API_URL}/pandas`)
                .then( pandas => {
                    store.dispatch({ type: 'RECEIVE_PANDAS', payload: pandas })
                }) 
        break
        case 'RECEIVE_PANDAS':
            return {
                ...currentState,
                pandas: action.payload
            }
        break
        case 'SELECT_PANDA':
            history.push(`/pandas/${action.payload.id}`)
            return {
                ...currentState,
                selectedPanda: action.payload
            }
        break;
        case 'INCREMENT_COUNTER':
            return {
                ...currentState,
                count: currentState.count + 1
            }
        break
    }
    return currentState
}

const initialState = {
    pandas: [],
    selectedPanda: {}
}

const store = createStore(
    reducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
