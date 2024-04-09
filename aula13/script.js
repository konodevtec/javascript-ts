//indexado       01234567
let umaString = 'Um Texto'


console.log(umaString.charAt(6))
console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`)
console.log(umaString.indexOf('Texto'))
console.log(umaString.indexOf('o', 3))
console.log(umaString.lastIndexOf('m', 3))
console.log(umaString.replace(/Um/, 'Outra'))


let duasString = 'O rato roeu a roupa do rei de Roma.'


console.log(duasString.replace(/r/g, 'l'))
console.log(duasString.length)
console.log(duasString.slice(2, 6))
console.log(duasString.slice(-3))
console.log(duasString.slice(32))
console.log(duasString.slice(-5, duasString.length -1))
console.log(duasString.slice(-5,-1))
console.log(duasString.substring(duasString.length -5, duasString.length -1))

console.log(duasString.split(' ', 3))

console.log(duasString.toUpperCase())
console.log(duasString.toLowerCase())