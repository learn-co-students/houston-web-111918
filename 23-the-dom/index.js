let bullets = document.createElement('ol')

data.Dogs.forEach(function(dog, index){
    let listItem = document.createElement('li')
    listItem.id = `dog-${index}`
    listItem.className = 'dog'
    listItem.innerText = dog.name
    //To Do: listItem.addEventListener()
    bullets.append(listItem)
})

document.body.append(bullets)


// Also Works: 
// bullets.append(
//     ...data.Dogs.map(function(dog, index){
//         let listItem = document.createElement('li')
//         listItem.id = `dog-${index}`
//         listItem.className = 'dog'
//         listItem.innerText = dog.name
//         listItem.addEventListener()
//         return listItem
//         // bullets.append(listItem)
//     })
// )