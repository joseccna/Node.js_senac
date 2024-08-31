var nota1 = 2
var nota2 = 3
var media =0
media = (nota1 + nota2)/2

if (media >= 6){
    console.log(`A media é ${media} Aprovado`)
}

else if(media >= 3 && media < 6){
    console.log(`A media é ${media} Recuperação`)
}

else if(media < 3){
    console.log(`A media é ${media} Reprovado`)
}
