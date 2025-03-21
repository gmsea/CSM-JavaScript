function carregar() {
    var msg = document.getElementById("img")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        document.body.style.background = "#e2cd9f"
    } else if (hora > 12 && hora < 18) {
        img.src = "fototarde.png"
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        document.body.style.background ="b9846f"
    } else {
        img.src = "fotonoite.png"
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        document.body.style.background = "#515154"
    }
} 
