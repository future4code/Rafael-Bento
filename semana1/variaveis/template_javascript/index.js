// Exercícios de interpretação de código.RESPONDER APENAS COMENTÁRIOS

// Exercício nº 01. ##########################

// let a = 10
// let b = 10
// console.log(b)
// b = 5
// console.log(a, b)

// RESPOSTA = 
// 10
// 10 5


// Exercício nº 02. ##########################

// let a = 10
// let b = 20
// let c //10
// c = a //10
// b = c //10
// a = b //10
// console.log(a, b, c)

// RESPOSTA =
// 10
// 10
// 10


// Exercício nº 03. ##########################

// let horasTrabalhadasDia = prompt('Quantas horas você trabalha por dia?')
// let salarioPorDia = prompt('Quanto você recebe por dia?')
// alert('Voce recebe ${salarioPorDia/horasTrabalhadasDia}, por hora')

// RESPOSTA = 
// t = salarioPorDia
// p = horasTrabalhadasDia


// Exercícios de escrita de código.
// EX. 01
// ############################
// let nome
// let idade

// console.log('O nome é :', typeof nome) /*AQUI TIVEMOS UM RETORNO DO TIPO undefined, pois representa uma falta de valor na atribuição da variável.*/
// console.log('A idade é :', typeof idade) /*QUI TIVEMOS UM RETORNO DO TIPO undefined, pois representa uma falta de valor na atribuição da variável. */

// nome = prompt('Diga seu nome Baby: ') 
// console.log('Seu nome é: ', nome);

// idade = prompt('Diga sua idade Baby: ') 
// console.log('Sua idade é: ', idade);

// console.log('Notou o tipo da variável DO NOME que  retorna agora:', typeof nome) /* O retorno aqui agora do typeof foi do tipo string, me lembro que ele retorna o que o console representa até o momento.*/

// console.log('Notou o tipo da variável DA IDADE que retorna agora:', typeof idade) /* O retorno aqui agora do typeof foi do tipo string, me lembro que ele retorna o que o console representa até o momento.*/

// console.log('Olá!', nome, 'você tem', idade, 'anos.')
// ############################
// FINAL EX. 01 

// Exercícios de escrita de código.
// EX. 02
// ########################################################

// const pergunta1 = prompt('Hoje é sábado?')
// const pergunta2 = prompt('Hoje esta frio?')
// const pergunta3 = prompt('Você esta de preto?')

// console.log('Hoje é sábado:', pergunta1)
// console.log('Hoje esta frio:', pergunta2)
// console.log('Você esta de preto', pergunta3)

// ########################################################
// FINAL EX. 02 

// Exercícios de escrita de código.
// EX. 03

let a = 10
let b = 25
a = c = 10 // c=10 a=0
b = a = 25 // a=25 b=0
c = b = 10 // b=10 c=0

console.log('O novo valor de a é:', a)
console.log('O novo valor de b é:', b)