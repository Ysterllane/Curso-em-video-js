# Notes:
* alert(' ');
* confirm(' '); <b>ok or cancel</b>
* prompt(' ');
* .length <b>quantos caracteres a string tem</b>
* \n <b>pula linha</b>
<br><br>
* Float = point float = ponto flutuante = número decimal

## Sinal de +
* (number + number) para adição
* (string + string) para concatenação

## Conversão strint to number:
* Number.parseInt();
* Number.parseFloat();
* Number();

## Converção number to sting:
* prompt sempre retorna uma string
* String(x);
* x.toString();

## Concatenação
* alert('A soma de ' + n1 + ' e ' + n2 + ' é ' + soma);

## Template string
* alert(`A soma de ${n1} e ${n2} é ${soma}`);
* com crase

## Formatar número
* x.toFixed(2); <b>Duas casas decimais no number</b>
* x.toFixed(2).replace('.', ','); <b>troca . por ,</b>
* x.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) <br>
<b>toLocaleString = localizar string pelo país</b> <br>
<b>currency = money</b>

## Formatar string
* .toUpperCase() <b>transformar em MAIÚSCOLAS</b>
* .toLowerCase() <b>transformar em minúscolas</b>

## Operadores aritiméticos
* divisão: 5/2 = 2.5
* resto da divisão: 5%2 = 1
* potenciação: 5** = 25

### Ordem de precedência
* 1° () 
* 2° ** potências 
* 3° * e / e % 
* 4° + e -

### Simplificações
* var n = 3
* n = n + 4 --> n += 4
* n = n - 5 --> n -= 5
* n = n * 6 --> n *= 6
* n = n / 10 --> n /= 10
* n = n ** 1 --> n **= 1
* n = n % 2 --> n %= 2

## Operadores de atribuição
* n = n + 1 --> n++
* n = n - 1 --> n--

## Operadores relacionais
Retornam true or false (valor booleano)
* > < >= <= == (igual) != (diferente)

### Operadores relacionais de identidade
* 5 === 5 true (5 é identico a 5?)
* 5 === '5' false (o operador identidade compara valor e tipo)
* 5 == 5 true
* 5 == '5' true (o operador igual compara somente valores)
* 5 != '5' false
* 5 !== '5' true (desigual restrito)

## Operadores Lógicos: ordem de execução
* 1° ! (negação)
* 2° && (conjunção 'e')
* 3° || (disjunção 'ou')

## Ordem de execução dos operadores
* 1° operadores aritiméticos
* 2° operadores relacionais
* 3° operadores lógicos

# Operadores ternários
* teste ? true : false
* média >= 7 ? 'Aprovado : 'Reprovado'

## DOM: Docment Object Model

### árvore DOM
<img src"./imgs/arvoreDOM">

## Selecionando elementos:
* .getElementsByTagName('')[] --> por tag/marca
* .getElementById('') --> por Id
* .getElementsByName('')[] --> por name
* .getElementsByClassName('')[]; --> por class
* .querySelector --> pega o primeiro seletor
* .querySelectorAll --> pega todos os seletores

## Estrutura de condicionais:
* if (simples)
* if {} else {} (composta)
* if {} else if {} else {} (aninhadas)
* switch (multipla) -->img

## Array / vetor

São variáveis compostas que armazenam mais de um elemento, cada elemento tem um valor e um indice de identificação qe começa em zero. Exemplo:

````
let num = [5, 2, 8, 9, 3]
````

### add um elemento no vetor:

Na posição 5, adicione o elemento 1

````js
num[5] = 1
````

Na ultima posição, adicione o elemento 6

````js
num.push(6)
````

Quantidade de posições:

````js
num.length
````

Exibir um elemento específico

````js
console.log(`O primeiro valor do vetor é ${num[0]}`)
````

Ordenar o vetor de forma crescente:

````js
num.sort()
````

For para vetores:

````js
for (let i in num) {
    console.log(`Posição: ${i}, elemento: ${num[i]}`)
}
````

Saber a posição de um elemento:

````js
let position = num.indexOf(3)

if (position == -1){
    console.log('O valor não foi encontrado :(')
} else {
    console.log(`O valor está na posição ${position}`)
}
````

## Funções:

* São ações executadas assim que são chamadas ou em decorrência de algum evento
* Pode receber parâmetros e retornar um resultado

````js
function parOuImpar(n) {
    if (n%2 == 0){
        return `par`
    } else {
        return `impar`
    }
}

let res = parOuImpar(11)

console.log(res)
````

## Objetos

Variavés compostas que guardam valores, variáves, funcões e métodos

````js
let amigo = {nome:'José', sexo:'mas', peso:85.4, engordar(p){}}
````

