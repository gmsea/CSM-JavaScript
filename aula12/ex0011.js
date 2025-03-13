var idade = 19
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log("Voce não tem idade para votar")
} else {
    if (idade >= 16 && idade < 18) {
        console.log("Voce ja esta apto para votar")
    } else {
        console.log ("Voce tem a obrigação de votar")
    }
    
}