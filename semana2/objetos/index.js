// EXERCÍCIO 01 (INTERPRETAÇÃO)

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// Matheus Nachtergaele
// Virginia Cavendish
//{canal: "Globo", horario: "14h"}
// canal: "Globo"
// horario: "14h"

// EXERCÍCIO 01 (INTERPRETAÇÃO) fim

// EXERCÍCIO 02 (INTERPRETAÇÃO)

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// false
// undefined

// EXERCÍCIO 01 - ESCRITA 


// const pessoa = {
//     nome: "Rafa",
//     apelido: ['Alto', 'Bom', 'Legal']
// }
// console.log(pessoa)
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]}, ${pessoa.apelido[2]}`)

// const mudarApelido(apelidoMudar) => {
//     const apelidoNovo = {
//         ...apelidoMudar,
//         apelido2: ['Grandão', 'Maior', 'Vara']
//     }
// }

// console.log(`Eu sou ${mudarApelido.nome}, mas pode mke chamar de: ${mudarApelido[0]},${mudarApelido[1]}, ${mudarApelido[2]}`)

// mudarApelido(pessoa)

// // EXERCÍCIO 02 - ESCRITA 
// // a) 
// const pessoa = {
//     nome: "Rafael",
//     idade: 35,
//     profissão: "dev",
// };

// const pessoa2 = {
//     nome: "Sophie",
//     idade: 30,
//     profissão: "professora"
// };
// // b)
// function showArray(objeto) {
//     return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao];
// } 

// console.log(showArray(pessoa));
// console.log(showArray(pessoa2));
// // EXERCÍCIO 02 - ESCRITA - fim

// // EXERCÍCIO 03 - ESCRITA

// const carrinho = []

// const fruta1 = {
//     nome : "laranja",
//     disponivel: true
// }
// const fruta2 = {
//     nome : "uva",
//     disponivel: true
// }
// const fruta3 = {
//     nome : "limão",
//     disponivel: true
// }
// function sacola(fruta1, fruta2, fruta3) {
//     carrinho.push(fruta1, fruta2, fruta3)
// }
// sacola(fruta3, fruta2, fruta3)
// console.log(carrinho)


// // // EXERCÍCIO 03 - ESCRITA - fim