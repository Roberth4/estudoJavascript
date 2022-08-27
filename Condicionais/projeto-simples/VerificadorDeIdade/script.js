function verificar(){   
    const data = new Date()
    const year = data.getFullYear() 
    // As duas variáveis acima é para pegar o ano atual.
    const ano = document.getElementById('ano')
    const anoNasc = (ano.value)
    const img = document.getElementById('imagem')
    const msg = document.getElementById('msg')
    //AS duas variáveis acima é para pegar o ano introduzido no input.

    if (anoNasc.length < 4 || anoNasc.length > 5){
        alert('Verifique os dados e tente novamente!')
    }else{
        const anoNasc = Number(ano.value)
        const idade = (year - anoNasc)
        const sexo = document.getElementsByName('radsex')
        const macho = sexo[0].checked
        if (sexo[0].checked){
            genero = 'Homem'
            msg.innerHTML = `<br>Detectamos: ${genero} com ${idade} anos.`
                if(idade >= 1 && idade < 14){
                    img.src = "image/masculino-menor.png"
                }else if (idade < 25){
                    img.src = "image/masculino-adulto.png"
                }else if (idade < 55){
                    img.src = "image/masculino-medio.png"
                }else if(idade > 55){
                    img.src = "image/masculino-idoso.png"
                }else {
                    alert('Verifique os dados e tente novamente!')
                }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            msg.innerHTML = `<br>Detectamos: ${genero} com ${idade} anos.`
                if(idade >= 1 && idade < 14){
                    img.src = "image/feminino-menor.png"
                }else if (idade < 25){
                    img.src = "image/feminino-adulto.png"
                }else if (idade < 55){
                    img.src = "image/feminino-medio.png"
                }else if(idade > 55){
                    img.src = "image/feminino-idoso.png"
                }else {
                    alert('Verifique os dados e tente novamente!')
                }   
        }
    }
}