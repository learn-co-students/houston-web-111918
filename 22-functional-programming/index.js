
const runThreeTimes = function(callback){
    callback('one')
    callback('two')
    callback('three')
}

const makeSandwich = function(selectedBread){
    const selectMeat = function(selectedMeat){
        const selectedBread = 'White bread'
        const selectCheese = function(selectedCheese){
            const selectedBread = 'Sourdough'
            console.log('Inside the selectCheese scope:', selectedBread)
            return {
                bread: selectedBread,
                meat: selectedMeat,
                cheese: selectedCheese
            }
        }
        console.log('Inside the selectMeat scope:', selectedBread)
        return selectCheese
    }
    console.log('Inside the makeSandwich scope:', selectedBread)
    return selectMeat
}