//Clouse é o escopo criado quando uma funçao é declarada
//Esse escopo permite a função acessar e manipular variáveis externas á função
//Contexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local' //retorna Local pelo contexto léxico que toma em conta o escopo (clouse)
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFunction = fora()
console.log(x)
console.log(minhaFunction())