// IEEE 754-2008
let num1 = 0.7 //number
let num2 = 0.1 //number

//num1 = ((num1 * 100) + (num2 * 100)) / 100 //0.8
//num1 = ((num1 * 100) + (num2 * 100)) / 100 //0.9
//num1 = ((num1 * 100) + (num2 * 100)) / 100 //1.0

num1 = Number(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))

//console.log(num1.toString() + num2) //convertendo na exibição
//num1 = num1.toString() //converter para string definitivamente
//console.log(num1.toString(2)) //Para binário
//console.log(num1.toFixed(2)) //Arrendonda decimais
//console.log(Number.isInteger(num1)) //mostra se o numero é inteiro
//let temp = num1 * 'Olá'
//console.log(Number.isNaN(temp))

