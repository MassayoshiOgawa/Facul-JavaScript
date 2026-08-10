const randnum = Math.floor(Math.random() * 10) + 1;
let attempt
do{
    attempt = parseInt(prompt("Adivinhe o número entre 1 e 10: "))
    if(attempt !== randnum){
        console.log("Número incorreto!")
    }
    
}while(attempt !== randnum)

console.log("Parabéns! Você acertou.")