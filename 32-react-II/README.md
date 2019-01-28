# Intro To React Part II

## Deliverables

* Render dragons on the left side of the screen (at home)
* When a dragon is clicked it moves to the right side of the screen (at war)
* If you click a dragon at war returns home



## Intro to Webpack

* Ways to export resources
  * Default export (don't use curly braces when importing)
  * Named export (use curly braces when importing)

## Intro to Components

* Components must be defined:

```
class DragonCard extends Component {
...
}
```

*  and can later be **rendered**:

```
<DragonCard/>
```

​	which instantiates and calls the **render** method of the component

## Intro to Props

* Props can be passed explicitly:

```
<DragonCard name={dragon.name} /> 
```

* Or implicitly using the spread operator:

```
<DragonCard {...dragon} /> 
```

