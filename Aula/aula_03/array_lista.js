// let fruntas = ['maçã','banana','laranja']
// console.log(fruntas[1])

// fruntas[1]='uva'
// console.log(fruntas[1])

// console.log(fruntas.length)

// fruntas.pop()
// fruntas.push('uva')
// console.log(fruntas)

// fruntas.splice(1,1,'abacaxi','manga')
// console.log(fruntas)

/////////////////////////////////////////////////////

// let fruntas = ['maçã','banana','laranja','uva']

// let i

// for(i=0;i<fruntas.length;i++){
//     console.log(fruntas[i])

// }
// console.log('fim')
//////////////////////////////////////////////


let numero = []

let i

for(i=1;i<=100;i++){
    numero.push(i)
}
console.log(numero)

let impar = []
let par = []
let res = 0
let con 
for(con=0;con<=99;con++){
    res = numero[con]%2
    if(res == 0){
        par.push(numero[con])
    }
    else{
        impar.push(numero[con])
    }
}
console.log(par)
console.log(impar)