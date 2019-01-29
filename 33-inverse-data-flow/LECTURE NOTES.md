# Inverse Data Flow

## Vocabulary
* Inverse Data Flow

## Outline
* Introduction
    * Review of outstanding deliverables
    * Moving dragons into state
    * Introduction to React's dev tools
* Accessing a parent's data using callbacks
    * Define a function in the parent
    * Pass it down to a child component as a prop
    * Invoke the prop inside of the child component
* Comparing prop-callbacks with event listeners
    * Similarities:
        * Functions attached to JSX elements
    * Differences:
        * We invoke prop-callbacks in Child Components that we define.
            * We control the arguments that prop-callbacks receive
        * React invokes event listeners, and passes them an event object
            * These event objects are similar to Mod 3 event Objects
            * We can use them to access the event target
            * We can use them to do `e.preventDefault()`
* Filtering a list when rendering
* Re-using components in multiple places



## Resources

Styles 

* `{{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}`
* `{{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}`