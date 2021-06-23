// EXERCÍCIO 01 (INTERPRETAÇÃO)
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O CÓDIGO INCREMENTA 0+1=1 / 1+2=3  / 3+3=6 / 6+4=10 - NA POSIÇÃO ABAIXO DE 5 ELE DEIXA DE EXECUTAR DANDO O RESULTADO DE 10.

// EXERCÍCIO 02 (INTERPRETAÇÃO)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// É IMPRESSO NO CONSOLE NÚMEROS MAIOR QUE 18, SENDO ELES... 19, 21, 23, 25, 27, 30

// não tenho certeza, vou esperar a resolução.

// EXERCÍCIO 03 (INTERPRETAÇÃO)
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// // O RESULTADO SERIA IMPRESSÃO DE ASTERISTICOS, DEPENDENDO DA QUANTIDADE, POR LINHA SERIA A IMPRESSÃO DO NÚMERO DESCRITO PELO USUÁRIO.
// *
// **
// ***
// ****

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//     - 💡 Dica

//         Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

//     c) Por fim, imprima o array com os nomes dos bichinhos no console

// A
// const bichinhos = Number(prompt("Olá! Quantos bicinhos você tem?"))
// const totaldeBichinhos = []

// verificaBichinhos = (numero) => {
//     if (numero <= 0) {
//         console.log("Que pena, mas você pode adotar um pet!")
//     } else {
//         let inicio = 0
//         let usuario = numero
//         while (inicio < usuario) {
//             let nomeDoBicinho = (prompt("Informe o nome dos seus bichinhos, um por vez..."))
//             let inseriBichinho = totalDeBichinho.push(nomeDoBicho)
//             inicio ++
//         }
//     }
//     console.log(totalDeBichinho)
// }
// verificaBichinhos(bichinhos)

// const arrayOriginal=([80,30,130,40,60,21,70,120,90,103,110,55])
// console.log(arrayOriginal)

// const arrayOriginal=([80,30,130,40,60,21,70,120,90,103,110,55])
// for(int = 0; i < arrayOriginal.length; i++ / 10)
// console.log(arrayOriginal)