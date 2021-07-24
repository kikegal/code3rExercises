const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums){
    if (x == 5){
        break
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){    //Cuidado con usar esta estructura, los rotulos externos. Es preferible usar otras funciones o metodos para desviar fluxos
    for (b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim')