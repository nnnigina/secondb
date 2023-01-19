// 1-е задание

let gOne = "aaa@bbb@ccc"

gOne = gOne.split('@').join('!')

console.log(gOne);

// 2-е задание

let gTwo = "HELLO WORLD"

gTwo = `${gTwo[0].toUpperCase()}${gTwo.toLowerCase().slice(1)}`

console.log(gTwo);

// 3-е задание

let gThree = 'Hello, it is HTML'

gThree = gThree.slice(0, 13) + 'not JS'

console.log(gThree);

// 4-е задание

let gFour = 'alex'

gFour = gFour[0].toUpperCase() + gFour.slice(1)

console.log(gFour);

// 5-е задание

let gFive = Math.random()

gFive = gFive.toString()

gFive = gFive[0] + gFive.slice(2)

console.log(gFive);

// 6-е задание 

let gSix = 'Lex Luter has a big suit'

gSix = gSix.slice(gSix.search('a'), gSix.search('a') + 1).toUpperCase() + gSix.slice(gSix.search('Lex'), gSix.search('Lex') + 3)

console.log(gSix);