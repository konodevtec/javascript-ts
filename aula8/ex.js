/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.95925925925924

Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const alturaEmM = 1.80
let imc // fórmula imc = peso / (altura * altura)
let anoNascimento

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 1980

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg
Tem ${alturaEmM}m de altura e seu IMC é de ${imc}`)

console.log(`${nome} nasceu em ${anoNascimento}`)