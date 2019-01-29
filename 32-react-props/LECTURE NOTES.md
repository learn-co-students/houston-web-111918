# Intro to React: Modular Code

## Vocabulary

* Components
* Rendering vs. Defining
* Webpack
* `props`
* `import` 
* `export`
  * named exports
  * default exports



## React Dragons Deliverables

- Render a list of dragons on the left side of the screen (at home)
- When a dragon is clicked move, move it to the right side of the screen (at war)
- If they are clicked while at war, then  should return home

## Outline

- Seperation of Concerns: An introduction to components
  - Revisit the single responsibility principle
  - We want our "view" code to be responsibile for one visual element and one visual element **only**
  - Components can be created by functions or classes
- Code organization 
  - Typically we will put each component in its own file, then include them with **`import`**.
  - The difference between **named** and **default** exports
  - An aside on the dangers of `export default`