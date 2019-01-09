# The Document Object Model

## Vocabulary

- HTML
- The Document Object Model
- DOM Node
- Query Selector

## Outline

- Introduction to Rendering
  - How do we render visual elements in the web?
  - What is the difference between **HTML **and JSON?
- Todays Deliverables
- Rendering through HTML
  - Revisiting the **Document Object Model**
  - Using `.innerHTML`
- Rendering using the Document Object Model directly
  - Using `.createElement` and `append`
  - The difference between creating and appending nodes
    - https://i.imgur.com/rw1mRDl.jpg
  - Manipulating **DOM Node**s
- Declarative vs Imperitive Programming
- Selecting Elements
  - By traversing the object structure
  - Using css selectors for shortcuts
    - Reviewing CSS selectors
      - id
      - class
      - Attribute


```
const dogList = document.body.appendChild(document.createElement('ul'))
const dogDetail = document.body.appendChild(document.createElement('ul'))

// Also works: 
// const dogList = document.createElement('ul')
// const dogDetail = document.createElement('ul')
// document.body.append(dogList)
// document.body.append(dogDetail)

const render = function(){
    dogList.innerHTML = ``
    dogDetail.innerHTML = ``
    data.Dogs.forEach(function(dog, indexOfDog){
        const dogName = document.createElement('li')
        dogName.id = dog.name
        dogName.className = 'dog-list-li'
        dogName.innerHTML = `
            <b class="dog-name">${dog.name}</b>
        `
        dogName.addEventListener('click', function(event){
            renderDogDetail(dog)
        })
        dogList.append(dogName)
    })
}

const renderDogDetail = function(dog){
    dogDetail.innerHTML = `
        <li>Name: ${dog.name}</li>
        <li>Breed: ${dog.breed}</li>
        <li><img src="${dog.image}" /></li>
    ` 
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', function(event){
        let indexOfDog = data.Dogs.indexOf(dog)
        data.Dogs.splice(indexOfDog, 1)
        render()
    })
    dogDetail.append(deleteButton)
    let editButton = document.createElement('button')
    editButton.innerText = 'edit'
    editButton.addEventListener('click', function(event){
        renderDogForm(dog)
    })
    dogDetail.append(editButton)
}

const renderDogForm = function(dog){
    dogDetail.innerHTML = `
        <form class="dog">
            <div>
                <label>Name</label>
                <input class="name-field" type="text" value="${dog.name}"/>
            </div>
            <div>
                <label>Breed</label>
                <input class="breed-field" type="text" value="${dog.breed}"/>
            </div>
            <div>
                <label>Image</label>
                <input class="image-field" type="text" value="${dog.image}"/>
            </div>
        </form>
    `
    let submitButton = document.createElement('button')
    submitButton.innerText= 'Submit'
    submitButton.addEventListener('click', function(event){
        // let input = dogDetail.querySelector('.name-field')
        // dog.name = input.value
        dog.name = dogDetail.querySelector('.name-field').value
        dog.breed = dogDetail.querySelector('.breed-field').value
        dog.image = dogDetail.querySelector('.image-field').value
        render()
        renderDogDetail(dog)
    })
    dogDetail.append(submitButton)
}

render()
``` 