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

const go = (direction, speed) => {
    let message = `The car is moving ${direction} at ${speed} mph.`

    if (speed > 75) {
        let speedMessage = message.concat(" SLOW DOWN!")
        console.log(speedMessage)
        return
    }

    console.log(message)
}

go("in circles", 12)
go("forward", 85)

const evenOrOdd = (number) => {
    if ((number % 2) === 0) {
        return "even"
    }

    return "odd"
}

const testArr = [3, 4, 17, 1, 260, 0]

for (let num of testArr) {
    console.log(evenOrOdd(num))
}