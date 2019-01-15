let dogBar = document.querySelector('#dog-bar')
let dogInfo = document.querySelector('#dog-info')
let toggleFilterButton  = document.querySelector('#good-dog-filter')

let pups = []
let selectedPup = null
let filter = false

function render(){
    console.log('Rendering Pups:', pups)
    dogBar.innerHTML = ''
    dogInfo.innerHTML = ''

    let pupsToDisplay
    
    if(filter){
        pupsToDisplay = pups.filter( pup => pup.isGoodDog )
    } else {
        pupsToDisplay = pups
    }

    pupsToDisplay.forEach( pup => {
        console.log('Rendering Pup:', pup)
        let dogSpan = document.createElement('span')
        dogSpan.innerText = pup.name
        dogSpan.addEventListener('click', () => {
            console.log('A Dog Span was clicked:', pup)
            selectedPup = pup
            render()
        })
        dogBar.append(dogSpan)
    })

    if(selectedPup != null){
        let showImage = document.createElement('img')
        let showName = document.createElement('h1')
        let showButton = document.createElement('button')
    
        showImage.src = selectedPup.image
        showName.innerText = selectedPup.name
        showButton.innerText = selectedPup.isGoodDog ? 'Report as Bad' : 'Report as Good'

        showButton.addEventListener('click', () => {
            selectedPup.isGoodDog =  !selectedPup.isGoodDog
            render()
            fetch(`http://localhost:3000/pups/${selectedPup.id}`, {
                method:'PATCH',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(selectedPup)
            })
        })

        dogInfo.append(
            showImage,
            showName,
            showButton
        )
    }
}

toggleFilterButton.addEventListener('click', () => {
    filter = !filter
    render()
})

fetch('http://localhost:3000/pups') // <- Returned a promise
    .then( res =>{ 
        console.log('Recieved the response')
        return res.json()
    }) // <- That promise resolved with "res"
    .then( res => {
        console.log('Parsed the response')
        pups = res
    })
    .then(render)