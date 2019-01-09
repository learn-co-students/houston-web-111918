let dogs = data.Dogs
let selectedDog = null;
let showForm = false

const render = function(){
    document.body.innerHTML = '' 
    renderDogList()
    if(showForm){
        renderDogForm()
    } else {
        renderDogDetail()
    }
}

let renderDogList = function(){
    let dogList = document.createElement('ol')
    dogList.style.width = '20%'
    dogList.style.float = 'left'
    document.body.append( dogList )
    dogs.forEach(function(currentDog, index){
        let listItem = document.createElement('li')
        listItem.id = `dog-${index}`
        listItem.className = 'dog'
        listItem.innerText = currentDog.name
    
        listItem.addEventListener('click', function(){
            // Render the dog detail...
            selectedDog = currentDog
            showForm = false
            render()
        })
        dogList.append(listItem)
    })
}

let renderDogDetail = function(){
    let dogDetail = document.createElement('div')
    dogDetail.style.width = '60%'
    dogDetail.style.float = 'left'
    document.body.append( dogDetail )
    if(selectedDog){
        let dogDescription = document.createElement('p')
        dogDescription.innerText = `${selectedDog.name}: ${selectedDog.breed}`

        let dogImage = document.createElement('img')
        dogImage.src = selectedDog.image_url
        dogImage.style.maxWidth = '100%'

        let editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        editButton.addEventListener('click', function(){
            showForm = true
            render()
        })

        dogDetail.innerHTML = ''
        dogDetail.append(
            dogDescription, 
            dogImage,
            document.createElement('br'),
            editButton
        )
    }
}

let renderDogForm = function(){
    if(selectedDog){

        let dogForm = document.createElement('form')
        dogForm.style.width = '60%'
        dogForm.style.float = 'left'

        document.body.append( dogForm )

        let dogNameLabel = document.createElement('label')
        dogNameLabel.innerText = 'Name'
        
        let dogNameInput = document.createElement('input')
        dogNameInput.value = selectedDog.name

        let dogBreedLabel = document.createElement('label')
        dogBreedLabel.innerText = 'Breed'
        
        let dogBreedInput = document.createElement('input')
        dogBreedInput.value = selectedDog.breed

        let dogImageLabel = document.createElement('label')
        dogImageLabel.innerText = 'Image URL'
        
        let dogImageInput = document.createElement('input')
        dogImageInput.value = selectedDog.image_url


        let submitButton = document.createElement('button')
        submitButton.innerText = 'Save'

        submitButton.addEventListener('click', function(e){
            e.preventDefault()
            selectedDog.name = dogNameInput.value
            selectedDog.breed = dogBreedInput.value
            selectedDog.image_url = dogImageInput.value
            render()
        })


        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'

        deleteButton.addEventListener('click', function(e){
            e.preventDefault()
            let index = dogs.indexOf(selectedDog)
            dogs.splice(index, 1)
            selectedDog = null
            render()
        })

        dogForm.append(
            dogNameLabel,
            dogNameInput,
            document.createElement('br'),
            dogBreedLabel,
            dogBreedInput,
            document.createElement('br'),
            dogImageLabel,
            dogImageInput,
            document.createElement('br'),
            submitButton,
            document.createElement('br'),
            deleteButton
        )
    }
}

render()