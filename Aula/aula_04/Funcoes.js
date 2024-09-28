//codido prinipal

// saudacao()

// console.log('fim.')

// //declaração de funções
// function saudacao(){
//     console.log("Olá! seja bem-vindo.")
// }
///////////////////////////////////////


// const nomeRecebido = saudacao('jose ', 'fernando ')
// console.log(nomeRecebido)
// console.log('fim.')

// //declaração de funções
// function saudacao(nome, nome2){
//     return nome
// }

////////////////////////////////////////////

//Coding
//Calculadora de Vantagem de Combustível

vantagem(4.20,6.00)


function vantagem(alcool,gasolina){
let porcentagem = 0
porcentagem = (100*alcool)/gasolina

console.log(porcentagem)

if(porcentagem <= 70){
    console.log("É mais vantajoso abastercer com alcool.")
}
else{
    console.log("É mais vantajoso abastercer com gasolina.")
}

}