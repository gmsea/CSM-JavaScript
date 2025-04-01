function verificar() {
    var ini = Number(document.getElementById("txtini").value);
    var fim = Number(document.getElementById("txtfim").value);
    var pas = Number(document.getElementById("txtpas").value);
    var res = document.getElementById("res");

    if (isNaN(ini) || isNaN(fim) || isNaN(pas) || ini === 0 || fim === 0 || pas === 0) {
        window.alert("[ERRO] Preencha todos os números corretamente!");
        return;
    } else if (fim <= ini) {
        window.alert("[ERROR] O valor final deve ser maior que o inicial!");
        return;
    }
    res.innerHTML = "Contando: <br>";

    for (var i = ini; i <= fim; i += pas ) {
        res.innerHTML += `${i} 👉 `
    } 
    res.innerHTML += "FIM"
}
