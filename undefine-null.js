let valor //não inicializado
console.log(valor)

valor = null // ausencia de valor
console.log (valor)


const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined //evitar undefined
console.log(!!produto.preco)
//delete produto.preco //sem preço
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)