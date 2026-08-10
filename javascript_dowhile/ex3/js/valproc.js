let soma = 0
do{
    let numero = parseInt(prompt(`Insira o valor desejado para saque: `))
    if(Number.isInteger(numero) == true) {
        if(numero > 0){
            break
        }
    } else {
        console.log("Valor inválido!")
    }
}while(true)

console.log("Saque autorizado.")