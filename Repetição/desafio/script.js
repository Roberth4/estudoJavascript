function enviar(){
    let start = document.getElementById('inicio');
    let end = document.getElementById('fim');
    let step = document.getElementById('passo');
    let res = document.getElementById('resultado');

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        alert('Verifique os dados inseridos e tente novamente.');
        res.innerHTML = 'Inválido! Impossível contar.'
    }else{ 
        res.innerHTML = `Insira o inicio da contagem com um fim e de quanto em quanto queira pular!`
        let i = Number(start.value);
        let f = Number(end.value);
        let p = Number(step.value);
        if (p <= 0){
            window.alert('Por favor, reconsiderar PASSO 1!')
        }else{
            res.innerHTML = 'Contando: '

        if (i < f){
            /* Contagem progressiva */
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }                   
        }else {
            /* Contagem regressiva */
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }        
        }res.innerHTML += `\u{1F3C1}`
        }        
    }   
}