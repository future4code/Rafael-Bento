// ###################################################
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// ###################################################
// EXERCÍCIO 01 DE INTERPRETAÇÃO - INÍCIO

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // RESULTADO = false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // RESULTADO = false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // RESULTADO = true

// console.log("d. ", typeof resultado) // RESULTADO = boolean

// EXERCÍCIO 01 DE INTERPRETAÇÃO  - FIM
// ###################################################
// EXERCÍCIO 02 DE INTERPRETAÇÃO - INÍCIO

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!") 

// const soma = primeiroNumero + segundoNumero

// console.log(soma)  // RESPOSTA = NESTA SOMA ELE SOMA APENAS AS STRINGS, NÃO VAI HAVER SOMATÓRIO, APENAS A JUNÇÃO DAS DUAS ESCRITAS.

// RESOLUÇÃO PARA O COLEGA.

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!")) 

// const soma = primeiroNumero + segundoNumero

// console.log(soma) // RESPOSTA = Quando concatenamos com o Number(prompt("Digite um numero!"")) a somatória dos números são reconhecidas e apartir dai a soma acontece no console.

// EXERCÍCIO 02 DE INTERPRETAÇÃO  - FIM
// ###################################################

// ###################################################
// EXERCÍCIOS DE ESCRITA DE CÓDIGO 
// ###################################################

// EXERCÍCIO 01 - INÍCIO

// let idade = Number(prompt('Digite sua idade...'))
// let idade2 = Number(prompt('Qual idade do seu melhor amigo?'))

// console.log('Sua idade é maior do que a do seu amigo?', idade > idade2)
// console.log('Diferença de idade é:', idade - idade2)

// EXERCÍCIO 01 - FIM
// ###################################################
// EXERCÍCIO 02 - INÍCIO

// const numeroPar = Number(prompt('Digite um número par...'))
// restoDaDivisao = numeroPar % 2
// console.log('O resto da divisão é:', restoDaDivisao) 

//TESTANDO VÁRIOS NÚMEROS PAR O RESTO SEMPRE DA 0.
//TESTANDO VÁRIOS NÚMEROS IMPAR O RESTO SEMPRE DA 1.

// EXERCÍCIO 02 - FIM
// ###################################################
// EXERCÍCIO 03 - INÍCIO

// let idadeAnos = Number(prompt('Qual sua idade em anos?'))
// console.log('A idade informada foi:', idadeAnos)

// idadeMeses = idadeAnos * 12
// console.log('A idade em meses é: ', idadeMeses)

// idadeDias = idadeAnos * 365
// console.log('A idade em dias é: ', idadeDias)

// idadeHoras = idadeAnos * (365*24)
// console.log('A idade em horas é: ', idadeHoras)

// EXERCÍCIO 03 - FIM
// ###################################################
// EXERCÍCIO 04 - INÍCIO

// let numero = Number(prompt('Digite dois números, o primeiro por favor:'))
// let numero2 = Number(prompt('Digite agora o segundo número por favor:'))

// console.log('O primeiro número digitado foi:',numero)
// console.log('O segundo número digitado foi:',numero2)

// console.log('O primeiro número é maior que o segundo?', numero > numero2)

// console.log('O primeiro número é igual ao segundo?', numero === numero2)

// console.log('O primeiro é divisível pelo segundo?', numero !== numero2)

// console.log('O segundo é divisível pelo primeiro?', numero2 !== numero)

// EXERCÍCIO 04 - FIM
// ###################################################