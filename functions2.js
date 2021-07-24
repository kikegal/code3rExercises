//Armazenando una function em uma variavel

const imprirSoma = function(a,b){
    console.log(a + b)
}
imprirSoma(2,3)

//Armazenar function Arrow em uma variavel

const soma = (a,b) => {
    return a + b
}
console.log(soma(2,2))

//retorno implicito

const subtracao = (a, b) => a - b 
console.log(subtracao(3,3))


const imprimir2 = a => console.log(a)
imprimir2('Olá')