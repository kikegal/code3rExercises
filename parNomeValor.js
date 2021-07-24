// Nome Par Valor

const saudacao = 'Opa'  // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // constexto léxico 2 (dentro da função)
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Legal',
        nuero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)