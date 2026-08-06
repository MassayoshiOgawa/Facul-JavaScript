function validaFormulario() {
    let num1 = parseInt(document.getElementById('num1').value);
    let soma = 1
    for(let i = num1; i >= 1; i--){
        soma *= i
    }
    console.log(soma)
    return false
}
