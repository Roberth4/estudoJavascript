function clique() {
    let num = document.getElementById('num').value
    let tab = document.getElementById('seltab')
    let vet = []
    
    if (num.length == 0){
        alert('Número inserido é inválido! por favor, verifique e tente novamente.')
    }else {
        vet.push(num)
        tab.innerHTML = ''

        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
        alert(vet)
    }
}
/* function limpar() {
    let clear = document.getElementById('seltab')
    clear.innerHTML = `Insira um valor acima.`
} */