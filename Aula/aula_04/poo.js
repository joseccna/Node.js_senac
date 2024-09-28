// Programação Orientada a Objetos (POO)
//Classes

class Carro{
    constructor(cor, marca, modelo, ano, ){
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0
    }
    ligar(){
        console.log('Carro ligado!')
        this.ligar = true
    }
    desligar(){
        console.log('Carro desligado!')
    }
    acelerar(){
     if(this.ligar){
        this.velocidade += 5
     }
    }

}

let carro1 = new Carro('ciano','Mercedes', 'GLA', 2024, 0)
let carro2 = new Carro('Verde','Fiat', 'Uno', 2021)
carro1.acelerar()


