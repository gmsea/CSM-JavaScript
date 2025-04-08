// ADICIONAR - Só pode ser de 1 a 100(Alert) V
// ADICIONAR - Não pode adicionar numeros ja adicionados(Alert) V
// ADICIONAR - Zerar respostas ao adicionar um novo numero V
// ADICIONAR - Mandar alerta se adicionar e não tiver nenhum numero V
var lista = []
function adicionar() {
    var num = document.getElementById("txtn").value
    if(num.length == 0) {
        window.alert("[ERRO] Digite algum numero !")
    } else if (num < 1 || num > 100) {
        window.alert("[ERRO] Digite um numero entre 1 e 100 !")
    } else {
        var n = Number(num)
        if (lista.indexOf(n) == -1 ){
            lista.push(n)
            var option = document.createElement("option")
            option.value = n
            option.textContent = `valor ${n} adicionado`
            selnum.appendChild(option)
            
        } else {
            window.alert("[ERRO] Esse numero ja esta na lista !")
        }
        resultado.innerHTML = ""
        
    }

}

// FINALIZAR - Contar o total de numeros cadastrados V
// FINALIZAR - Informar o maior e menor numero V
// FINALIZAR - Somar todos os valores V
// FINALIZAR - Mostrar a media dos somados pelos numeros cadastrados V
// FINALIZAR - A Lista tem que ter pelo menos um numero(Alert)
function finalizar() {
    if (lista.length < 1) {
        window.alert("[ERRO] Adicione um número na lista !")

    } else {
        var total = lista.length
        var maior = Math.max(...lista)
        var menor = Math.min(...lista)
        var soma = 0
        for (let i in lista) {
            var soma = lista[i] + soma
        }
        var media = (soma) / (total)
        resultado.innerHTML = `Foram cadastrados ${total} números !<br>
        O maior número cadastrado é ${maior}.<br>
        O menor número cadastrado é ${menor}.<br>
        A soma total de todos os números da lista é ${soma}.<br>
        A média dos numero digitados é de ${media}.<br>`
    }


}