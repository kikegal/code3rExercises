const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao) // this funciona aqui para referenciar a saudacao, sin el this no sabría donde encontrarla fuera del bloco
    }
}
pessoa.falar()

/*const falr = pessoa.falar
falar() /*cria conflito entre paradigmas: funcional e O.O
        porque al llamar falar() no debería ser tomada en cuenta el contexto . pessoa*/

const falarDePessoa = pessoa.falar.bind(pessoa) // Con este metodo se pasa el parametro que se quiere asociar
falarDePessoa()