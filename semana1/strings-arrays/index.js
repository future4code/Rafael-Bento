// Exercícios de interpretação de código
// Exercício 1 ##################################

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e.(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

// Exercício 1 - FIM ##################################

// Exercício 2 ##################################

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercício 2 - FIM ##################################

// Exercícios de escrita de código
// Exercício 1 ##################################
// const nomeDoUsuario = prompt('Digite o nome do Usuário: ')
// const emailDoUsuario = prompt('Digite o e-mail do Usuário: ')

// console.log('O e-mail', emailDoUsuario, 'foi cadastrado com sucesso. Seja bem-vinda(o)', nomeDoUsuario)
// Exercício 1 - FIM ##################################

// const comidaPreferidas = ["Batata", "Chocolate", "Pizza", "Suco", "Laranja"]

// console.log(comidaPreferidas)

// console.log(`Essas são as minhas comidas preferidas: 
// ${comidaPreferidas[0]}
// ${comidaPreferidas[1]}
// ${comidaPreferidas[2]}
// ${comidaPreferidas[3]}
// ${comidaPreferidas[4]}`)

const listaDeTarefas = []

const tarefa1 = prompt('Digite 01 de 03 tarefas que precisa realizar hoje?')
const tarefa2 = prompt('Digite 02 de 03 tarefas que precisa realizar hoje?')
const tarefa3 = prompt('Digite 03 de 03 tarefas que precisa realizar hoje?')

console.log(listaDeTarefas)

const tarefa4 = prompt('Digite o índice da tarefa já realizada: 0, 1 ou 2')
listaDeTarefas.splice(tarefa4, 1)
console.log(listaDeTarefas)

