let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // retorna false porque o num2-- não foi comparado ainda, então continua valendo 2
console.log(num1 === num2)