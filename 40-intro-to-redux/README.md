# Intro to Redux

Redux

* State (variable data) management tool
* A design principle 

State

* Variable Data

Reducer

* A function which creates new versions of state

Action

* A Plain JavaScript Object which represents a user's interaction with you app

Store

* A wrapper for your state



`createStore`

* Creates a store
  * accepts a reducer
  * accepts initial state
  * Middleware

`store`

* `getState`
  * returns the current state
* `dispatch`
  * Inform the store of an action
  * Invokes the reducer with that action



Redux in React

`react-redux`

* Utility which provides tools to intergrate redux with react

`Provider`

* Accepts the store as a prop

`connect`

* a function which takes in two other functions:

  * `mapStateToProps`

  * `mapDispatchToProps`

    * or an object called `actions`

    returns *another function* and that function accepts a component and returns a new component connected to the redux store

















