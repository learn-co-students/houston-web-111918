// Utils:
let s = function(selector){
    return document.querySelector(selector)
}

let c = function(tagName){
    return document.createElement(tagName)
}

// HTML Elements: 
let countHeading = s('#counter')
let plusButton = s('#plus-button')
let minusButton = s('#minus-button')
let likeButton = s('#like-button')
let toggleButton = s('#pause')
let likesList = s('.likes')
let commentsContainer = s('.comments')
let commentForm = s('#comment-form')
let commentInput = s('#comment-input')
let submitButton = s('#submit')

// Variable Data:
let count = 0
let likes = {}
let on = true
let comments = []

// Renderers:
let render = function(){
    countHeading.innerText = count
    if(on){
        plusButton.disabled = false
        minusButton.disabled = false
        likeButton.disabled = false
        toggleButton.innerText = 'pause'
    } else {
        plusButton.disabled = true
        minusButton.disabled = true
        likeButton.disabled = true
        toggleButton.innerText = 'resume'
    }
    renderLikes()
    renderComments()
}

let renderLikes = function(){
    likesList.innerHTML = ''
    for( let number in likes ){
        let likeListItem =  c('li')
        likeListItem.innerText = `${number} was liked ${likes[number]} times`
        likesList.append(likeListItem)
    }
}

let renderComments = function(value){
    commentsContainer.innerHTML = ''
    comments.forEach(function(comment){
        let commentParagraph = c('p')
        commentParagraph.innerText = comment
        commentsContainer.append(
            commentParagraph
        )
    })
}

// Event Listeners:
setInterval(function(){
    if(on){
        count++
        render()
    }
}, 1000)

plusButton.addEventListener('click', function(e){
    count++
    render()
})

minusButton.addEventListener('click', function(e){
    count--
    render()
})

likeButton.addEventListener('click', function(e){
    if(likes[count] === undefined){
        likes[count] =  1
    } else {
        likes[count] = likes[count] + 1
    }
    // likes[count] = likes[count] === undefined ? 1 : likes[count] + 1
    // likes[count] = !likes[count] ? 1 : likes[count] + 1
    render()
})

toggleButton.addEventListener('click', function(){
    if(on){
        on = false
    } else {
        on = true
    }
    // on = !on
    render()
})

commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    // commentForm === e.target
    // commentForm.commentInput === commentInput
    comments.push(commentInput.value)
    commentInput.value = ''
    render()
})

// OR

// submitButton.addEventListener('click', function(e){
//     e.preventDefault()
//     let value = commentInput.value
//     console.log(value)
// })