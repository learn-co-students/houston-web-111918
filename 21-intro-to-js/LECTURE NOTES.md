# Intro to JavaScript and SPAs

## Vocabulary

- JavaScript
- `<script>` tags
- Keywords
  - `function`
  - `var`
  - `let`
  - `const`
  - `new`
  - `typeof`
  - `instanceof`
  - `return`
- `constructor` property
- Coalescing
- Single Page Application

## Outline

- Why use JavaScript?
  - Our deliverable
  - How would we accomplish this with Rails
  - Review request response lifecycle
  - HTML is a static templating language, incapable of responding dynamically
  - **JavaScript** allow static pages to have behavior
- How do we run JavaScript?
  - We use **`<script>` tags**
- Begin Deliverables
  - Google: "display an updating clock with javascript"
- What does the **`function`** keyword do?
  - How about **`var`**?
    - How is **`var`** different from **`let`**  and **`const`** ?
- What is **`new`**?
- How do Objects work in JavaScript?
  - Objects inherit from prototypes
  - All objects inherit from `Object`
    - Plain objects can be used like `Hash`s from Ruby
  - Objects are passed by reference
    - mutation
  - Built in objects
- How can we check the types of `today `, `h`, `m`, and `s`?
  - **`typeof`**
    - Primatives include object, symbol, string, number, boolean, and function
  - **`instanceof`**
  - **`.constructor`** method
- What happens when we add numbers and strings?
  - Coalescing
- Complete Deliverables
- Refactoring into a seperate file
  - src attribute on the Script tag
- How will we structure our apps now that we use JavaScript?
  - JavaScript scripts were once written as adhoc addons
  - This leads to messy speghetti code
  - The best seperation of concerns sees JavaScript managing *all* of the interface in a **single page application**