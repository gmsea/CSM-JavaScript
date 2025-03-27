function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    var img = document.getElementById("foto")
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO]Digite um ano valido!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade < 5){
                img.setAttribute("src", "bebeh.png");
            } else if (idade < 12){
                img.setAttribute("src", "criancah.png");
            } else if (idade < 18 ){
                img.setAttribute("src", "jovemh.png");
            } else if (idade < 45){
                img.setAttribute("src", "adultoh.png");
            } else {
                img.setAttribute("src", "idosoh.png");

            }

        } else {
            genero = "Mulher"
            if (idade < 5){
                img.setAttribute("src", "bebem.png");
            } else if (idade < 12){
                img.setAttribute("src", "criancam.png");
            } else if (idade < 18 ){
                img.setAttribute("src", "jovemm.png");
            } else if (idade < 45){
                img.setAttribute("src", "adultom.png");
            } else {
                img.setAttribute("src", "idosom.png");
            }
        }
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}