# Functional Programming

## Vocabulary

- ECMAScript

- Programming Paradigm
  - Procedural
  - Object Oriented
  - Functional

- Callback Functions

- Currying

- First Class Function

- Higher Order Function


## Outline

- History of JavaScript
  - NetScape, Brendan Eich, and the legend of original javascript
  - Google v8 Engine
  - Node.js
  - What is ECMAScript?
- Introduction to Programming Paradigms
- Introduction to Functional programming
    - An output as the product of one or more inputs ( a transformation )
- Currying
  - Scope and closures
- Callbacks
  - Functions are variables in JavaScript
  - We can pass them around
  - We can create them anonymously 
  - This is similar to a code block in Ruby
- Currying and Callbacks


```
// Higher Order Functions

// Currying
// Higher Order Functions

// Currying
const makeSandwich = function(selectedBread){
	return function(selectedMeat){
		return function(selectedCheese){
            return function(selectedCondiment){
                return {
					bread: selectedBread,
					meat: selectedMeat,
					cheese: selectedCheese,
					condiment: selectedCondiment
                }
            }
        }
    }
}

// Callbacks
function each(iterable, callback){
    for(var element of iterable){
        callback(element)
    }
}

// Currying and Callbacks
function merge(callback1, callback2){
    return function(input){
        let result1 = callback1(input)
        return callback2(result1)
    }
}
```