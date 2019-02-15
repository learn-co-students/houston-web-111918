* Install Redux:
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js"></script>`

* Install Devtools:
    * Link: https://github.com/zalmoxisus/redux-devtools-extension 
    * `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`


```
<html>
    <body>
        <head>
            
        </head>
        <h1 id="header"></h1>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js"></script>
        <script>
            
            // Select DOM Elements
            const header = document.querySelector('#header')

            // Define default state
            const defaultState = { 
                counter: 0 
            }

            // Define the applications reducer
            const reducer = (currentState, action) => {
                console.log('Reducing:', currentState, action)

                switch(action.type){
                    case 'INCREMENT_COUNTER':
                        return { counter: currentState.counter + 1 }
                    break;
                }

                return { counter: currentState.counter }
            }

            // Create the Store
            const { createStore } =  Redux
            // import { createStore } from 'redux'
            const store = createStore(
                reducer, 
                defaultState, 
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
            )

            // Subscribe to the state using the store
            store.subscribe( () => {
                let state = store.getState()
                // Change the dom to reflect new state
                header.innerText = state.counter
            })

        </script>
    </body>
</html>
```