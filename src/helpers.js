function randomNumbers(count){
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const items = [];
    for (let i= 0; i <= count; i++ ){
        const index = Math.floor(Math.random() * numbers.length)
        items.push(numbers[index])
    }
    return items.join("")
}

function generateIdentifier() {
    const date = Date.now().toString()
    return date.substring(0, 11)
}

export  {randomNumbers, generateIdentifier}

