# Thinking in React

##What we've covered so far

* State
* Props
* Forms
* Lifecycle Methods

## Thinking in React Process

* ~~Identify a component hierarchy~~
* ~~Make a static version of the app~~
* ~~Plan a data hierarchy~~
  * ~~Deciding where state goes~~
  * ~~Deciding where props go~~
* ~~Attach data to the components~~
* ~~Add inverse data flow~~
* ~~Refactoring~~

### Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/jmiles/image/upload/v1548973970/lecture-assets/houston-web-111918/component-hierarchy.png)

* App (black) 
  * Header (purple)
  * PetsContainer (green) 
    * SearchForm (pink)
    * PetList (yellow)
      * [] PetCard (blue)

### Data Hierarchy

* pets [] (in PetsContainer state, passed to PetList)

* petSearch (in PetsContainer state, passed to SearchForm)


## Types of Components

- Container
  - Manage data (have state)
- Presentational
  - Manage the visuals (recieve props)