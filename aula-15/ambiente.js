let num = [5, 2, 8, 9, 3]
num[5] = 1
num.push(6)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort()
console.log(num)

// for (let i = 0; i < num.length; i++){
//     console.log(`Posição: ${i}, elemento: ${num[i]}`)
// }

for (let i in num) {
    console.log(`Posição: ${i}, elemento: ${num[i]}`)
}

let position = num.indexOf(3)

if (position == -1){
    console.log('O valor não foi encontrado :(')
} else {
    console.log(`O valor está na posição ${position}`)
}
