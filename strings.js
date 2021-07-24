const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //para saber qual é o # unicode del caracter
console.log(escola.indexOf('3')) //saber si existe el valor 3 dentro de la string
console.log(escola.substring(1))// desde el indice 1 en adelante
console.log(escola.substring(0,3))// del 0 hasta el 3, pero sin imprimir el tercero
console.log('Escola '.concat(escola).concat("!"))
//console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //regex outra forma
console.log('Ana,Maria,Pedro'.split(','))