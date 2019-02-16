import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

const reducer = (currentState, action ) => {
    switch(action.type){
        case 'ATTACK':
            var newState = { ...currentState, [action.selectedCharacter]:  currentState[action.selectedCharacter] - 1 } 
            return newState
        break;
        case 'HEAL':
            var newState = { ...currentState }
            newState[action.selectedCharacter] =  currentState[action.selectedCharacter] + 1
            return newState
        break;
        default:
            return currentState
        break
    }
}

const initialState = {
    toothless: 10,
    smaug: 10,
    bozar: 10,
    cherub: 10,
    rainbowdash: 10,
    galaxyNote: 10,
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
