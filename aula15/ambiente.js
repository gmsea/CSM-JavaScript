let num = [5, 8, 2, 9, 3]
num[5]= 6//adiciona 6 na posição 5
num.push(21)//adiciona 21 na ultima posição do array
console.log(`Nosso vetor é o ${num} e possuiu ${num.length} elementos 
    e na terceira posição temos ${num[2]}`)
/* 
for (let i=0; i<num.length; i++){
    console.log(num[i])
}
*/

for( let i in num){
    console.log(num[i])
}

console.log(`o numero 9 esta na posição ${num.indexOf(9)}`)