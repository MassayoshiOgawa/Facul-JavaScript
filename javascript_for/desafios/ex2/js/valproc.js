function validaFormulario() {
    let num1 = parseInt(document.getElementById('num1').value);
    let soma = 0
    for(let i = 1; i <= num1; i++){
        soma += i
    }
    console.log(soma)
    return false
}