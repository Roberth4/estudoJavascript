function clique(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor, insira um número!')
    }else{
        tab.innerHTML = ``
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}