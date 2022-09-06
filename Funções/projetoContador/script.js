let num = document.getElementById('num')
let lista = document.getElementById('flist')
let res = document.getElementById('res')
let valores = []
  


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inLista(n, l) {
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
        let tmn = valores.length
        let NumA = valores.map(Number);
        let max = Math.max(...NumA)
        let min = Math.min(...NumA)

        res.innerHTML = `Ao todo, temos ${tmn} números cadastrados. <br>
        O maior número cadastrado é ${max}.<br>
        O menor número cadastrado é ${min}.<br>`
        

    }
}