let num = document.getElementById('num')
let lista = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []
  
function isNumero(n) { /* Função para validar o número da array. */
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, l) { /* Função para verificar os elementos da lista. */
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function clique() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou não encontrado na lista.')
    }
}

function finalizar() {
    if(valores.length == 0){
        alert('Por favor, insira valores.')
    }else {
        let tmn = valores.length /* Quantidade de números cadastrados. */
        let NumA = valores.map(Number); /* Transformei as strings do vetor em números para fazer os demais cálculos. */
        let max = Math.max(...NumA) /* Maior número do vetor */
        let min = Math.min(...NumA) /* Menor número do vetor */
        let sum = 0 /* Variável que receberá a soma dos elementos de arrays. */
        for (let i = 0; i < valores.length; i++){
            sum += valores[i]
        }

        res.innerHTML = `
        <p>Ao todo, temos ${tmn} números cadastrados.</p>
        <p>O maior número cadastrado é ${max}.</p>
        <p>O menor número cadastrado é ${min}.</p>
        <p>A soma de todos os valores, temos ${sum}.</p>
        <p>A média dos valores digitados é ${sum/tmn}.</p>
        `
    }
}