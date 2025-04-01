function calcular() {
    var num = document.getElementById("txtn").value;
    var seltab = document.getElementById("seltab");
    if(num.length == 0) {
        window.alert("[ERROR] Digite um número !")
    } else {
        let n = Number(num)
    }
    seltab.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        var c = i * num; 
        var option = document.createElement("option");
        option.value = c;
        option.textContent = `${i} x ${num} = ${c}`;
        seltab.appendChild(option);
    }
}