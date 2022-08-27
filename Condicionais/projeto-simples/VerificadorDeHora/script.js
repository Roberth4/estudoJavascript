function carregar(){
    const msg = window.document.getElementById('msg');
    const img = window.document.getElementById('imagem');
    const data = new Date();
    const hora = data.getHours();
    msg.innerHTML = `<p>Agora são ${hora} horas.</p><br>`;
    
    if (hora > 0 && hora < 12){
        img.src = 'image/manha.png'
        document.body.style.backgroundColor = '#e3a021'
    }else if (hora > 12 && hora <= 18){
        img.src = 'image/tarde.png'
        document.body.style.backgroundColor = '#d94322'
    }else {
        img.src = 'image/noite.png'
        document.body.style.backgroundColor = '#454d9a'
    }
}