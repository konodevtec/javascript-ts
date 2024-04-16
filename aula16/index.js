//            012345678910  
const nome = 'Luiz Otávio'

//              [  0      1       2]
const alunos = ['Luiz','Maria','João']

//Alterando nome dos alunos
alunos[0] = 'Eduardo'
alunos[3] = 'Luiza'
alunos[alunos.length] = 'Luana'
alunos.push('Otávio') //adiciona no final da array
alunos.unshift('Luana') //adiciona no começo da array

//removendo do array
const removido = alunos.pop() //remove no final do array
const adicionado = alunos.shift() //remove no começo da array
delete alunos[1]

//Fatiando
console.log(alunos.slice(0, 2))


console.log(alunos)
console.log(removido)
console.log(adicionado)
console.log(typeof alunos)
console.log(alunos instanceof Array)
