function parOuImpar(n) {
    if (n%2 == 0){
        return `par`
    } else {
        return `impar`
    }
}

// chamada
let res = parOuImpar(2)

console.log(res)
