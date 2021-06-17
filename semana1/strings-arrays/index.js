// Exercícios de interpretação de código
// Exercício 1 ##################################

// let array
// console.log('a. ', array) // a. undefined QUANDO DECLARAMOS UMA VARIÁVEL E ELA NÃO TEM VALOR, O VALOR DELA É undefined.

// array = null
// console.log('b. ', array) // b. null // VALOR null é nulo.

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11 //array.length diz quantos elementos tem. No caso é 11.

// let i = 0 // variável i vale 0.
// console.log('d. ', array[i]) // d. 3 // IMPRIME o array da  posição maracada, no caso [i], lembrando que a contagem começa do 0 nos arrays.

// array[i+1] = 19 // aqui você muda o valor do elementos de i + 1
// console.log('e. ', array) // e.(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] // AQUI array no final signigica impressão do awway como um todo.

// const valor = array[i+6] // RECEBE O ELEMENTO DA POSIÇÃO I+6.
// console.log('f. ', valor) // f. 9 // variável valor vai receber o número da posição 6 que é o 9.

// Exercício 1 - FIM ##################################

// Exercício 2 ##################################

// const frase = prompt("Digite uma frase")
// // replaceALL TROCA AS LETRAS "A" pelas "I"
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercício 2 - FIM ##################################

// Exercícios de escrita de código
// //Exercício 1 ##################################
// const nomeDoUsuario = prompt('Digite o nome do Usuário: ')
// const emailDoUsuario = prompt('Digite o e-mail do Usuário: ')

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo(a). ${nomeDoUsuario}`)
// Exercício 1 - FIM ##################################\

// const comidaPreferidas = ["Batata", "Chocolate", "Pizza", "Suco", "Laranja"]

// console.log(comidaPreferidas)

// console.log(`Essas são as minhas comidas preferidas: 
// ${comidaPreferidas[0]}
// ${comidaPreferidas[1]}
// ${comidaPreferidas[2]}
// ${comidaPreferidas[3]}
// ${comidaPreferidas[4]}`) //strings tamplates para imprimir uma embaixo da outra.

// //OPÇÃO CONSOLE.LOG - OUTRO JEITO.
// console.log('Essas são as minhas comidas preferidas: (OPÇÃO DO CÓDIGO 2')
// console.log(comidaPreferidas[0])
// console.log(comidaPreferidas[1])
// console.log(comidaPreferidas[2])
// console.log(comidaPreferidas[3])
// console.log(comidaPreferidas[4])

// // TROCAR O VALOR DE UM ELEMENTO.

// const novaComida = prompt("Diga uma comida que você goste!")
// comidaPreferidas[1] = novaComida
// console.log(comidaPreferidas)

// TOPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

// EXERCÍCIO 03
const listaDeTarefas = []

const tarefa1 = prompt('Digite 01 de 03 tarefas que precisa realizar hoje?')
const tarefa2 = prompt('Digite 02 de 03 tarefas que precisa realizar hoje?')
const tarefa3 = prompt('Digite 03 de 03 tarefas que precisa realizar hoje?')

// USANDO O METODO PUSH VAMOS ACRESCENTAR OS DADOS DO USUÁRIO NO ARRAY VÁZIO.

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

// TOP, INCLUIR NO ARRAY VÁZIO O QUE O USUÁRIO ESCREVEU.

const tarefaRealizada = prompt("Digite o índice de uma tarefa que já você já realizou: 0 , 1 ou 2.")

// METODO SPLICE, REMOVE DO ARRAY O ELEMENTO DO ARRAY DIGIADO.
listaDeTarefas.splice(Number(tarefaRealizada), 1)
console.log(listaDeTarefas)