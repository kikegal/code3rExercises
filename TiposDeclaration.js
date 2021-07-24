console.log(soma(3,4))  // o console pode ser lido só na linha 1 antes da function porque JS carrega primeiro as funções
                        // isso só porque foi do tipo delaration, não expressio nem name expression
// function declaration
function soma (x, y){
    return x + y 
}


// function expression
const sub = function(x, y){
    return x + y 
}
console.log(sub(10,5))
// named function expression

const mult = function mult(x, y){
    return x * y
}