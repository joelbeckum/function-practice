// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7

//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(22)
// console.log(dogAge)

// const logFavoriteBreed = (dogBreed) => {
//     if (dogBreed === "meow") {
//         return "I like cats"
//     }
    
//     return `My favorite dog breed is ${dogBreed}`
// }

// const myFavorite = logFavoriteBreed("golden retriever")
// console.log(`When it comes to pets, ${myFavorite}`)

// const add = (first, second, third) => {
//     return first + second + third
// }

// console.log(add(17, 4, 11))

// const go = (direction, speed) => {
//     let message = `The car is moving ${direction} at ${speed} mph.`

//     if (speed > 75) {
//         let speedMessage = message.concat(" SLOW DOWN!")
//         console.log(speedMessage)
//         return
//     }

//     console.log(message)
// }

// go("in circles", 12)
// go("forward", 85)

// const evenOrOdd = (number) => {
//     if ((number % 2) === 0) {
//         return "even"
//     }

//     return "odd"
// }

// const testArr = [3, 4, 17, 1, 260, 0]

// for (let num of testArr) {
//     console.log(evenOrOdd(num))
// }

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// const filteredArr = []

// const filterKWords = (arr) => {
//     for (let word of arr) {
//         if (!word.startsWith("k")) {
//             filteredArr.push(word)
//         }
//     }
// }

// const joinArr = (arr) => {
//     let joinedArr = arr.join(' ')

//     return joinedArr
// }

// filterKWords(words)

// console.log(joinArr(filteredArr))

// const calcFishOdds = () => {
//     let result = Math.random() * 2

//     if (result <= 1) {
//         return true
//     }

//     return false
// }

// let fishResult = calcFishOdds()

// if (fishResult) {
//     console.log("Sven hooked a tuna! :)")
// } else {
//     console.log("Sven came up empty-handed. :(")
// }

const orderMeal = (sandwich, side, drink, dessert) => {
    const meal = {
        sandwich: sandwich,
        side: side,
        drink: drink,
        dessert: dessert
    }

    return meal
}

const takeOutBag = orderMeal("Double decker Heart Attacker", "Cheese Fries", "54oz Coke", "Triple Scoop Fudge Sundae")

console.log(takeOutBag)