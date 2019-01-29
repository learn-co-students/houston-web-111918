# Intro to React: Declatative Programming

## Vocabulary

* Declarative Programming

* JSX

* NPM

* Babel

* Webpack

* `render`

* state

* `setState`


## Outline

- Introduction
  - Reviewing our methods in Mod 3. What was hardest about Mod 3?
  - The problem: I have to look in at least two places to figure out why this page looks the way that it does
  - The solution: **Declarative Programming**
    - One place in our code which describes what our interface should look like, given some variables
  - Declarative rendering with JavaScript
    - Write a function in JavaScript which is responsible for deciding what the view looks like
    - Call that function every time the relevant data changes
    - We've been doing this in lecture all along!
    - Why it's still not declarative enough: It's too verbose!
- Building the same functionality with React
  - Overview of React-adjacent technologies
    - NPM, JSX, Babel, Webpack, 
  - React vs. React DOM
  - Writing JSX
    - We interpolate into jsx using `{}`
      - An aside on the many uses of `{}`