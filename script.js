function verificaCpf(cpfRecebido) {

    //INICIANDO VARIAVEIS
    let primeiraSoma = 0;
    let segundaSoma = 0;
    let primeiroMultiplicador = 10;
    let segundoMultiplicador = 11;
    let digitoDez = 0;
    let digitoOnze = 0;

    //RECEBE CPF E FATORA
    let cpf = cpfRecebido;
    let cpfFatorado = cpf.split('');

    //RECEBE PARTE DO ARRAY A SER VERIFICADA
    let arrayVerificardor = [];
    cpfFatorado.filter((valor, index) => {
        if(index < 9){
            arrayVerificardor.push(valor);
        }
    });

    //VERIFICAÇÃO PRIMEIRO DIGITO
    for(let i=0 ; i < arrayVerificardor.length ; i++){
        primeiraSoma = primeiraSoma + (arrayVerificardor[i] * primeiroMultiplicador);
        primeiroMultiplicador--;
    }
    digitoDez = 11 - (primeiraSoma % 11);
    arrayVerificardor.push(digitoDez);

    //VERIFICAÇÃO SEGUNDO DIGITO
    for(let i=0 ; i < arrayVerificardor.length ; i++){
        segundaSoma = segundaSoma + (arrayVerificardor[i] * segundoMultiplicador);
        segundoMultiplicador--;
    }
    digitoOnze = 11 - (segundaSoma % 11);
    arrayVerificardor.push(digitoOnze);


    //PREPARA VARIAVEL PARA COMPARAÇÃO
    arrayVerificardor = arrayVerificardor.toString();
    arrayVerificardor = arrayVerificardor.replace(/,/g,'');

    //COMPARA VARIAVEL
    if(arrayVerificardor == cpf){
        return('CPF VALIDO');
    } else {
        return('CPF INVALIDO'); 
    }

}


//RETORNO DE VERIFICAÇÃO
let btn = document.getElementById('btn');
let resp = document.getElementById('resposta');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let valorDigitado = document.getElementById('cpf');
    let resposta = verificaCpf(valorDigitado.value);
    resp.innerHTML = resposta;
});








