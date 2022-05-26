const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


function imc(peso, altura) {
    let calc = peso / (altura * altura);
    return calc
}

function mostrarResultado() {
    let calcImc = imc(peso.value.replace(',', '.'), altura.value.replace(',', '.'));
    if(resultado.textContent != '') resultado.innerHTML = '';
    if (!peso.value || !altura.value){
        alert('OPS, você esqueceu de digitar algo');
        return
    }

    if(isNaN(calcImc)){
        alert('OPS, digite apenas números!')
        return
    }

    if(calcImc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${calcImc.toFixed(2)}, você está abaixo do peso.`
    }else if(calcImc >= 18.5 && calcImc <= 24.9) {
        resultado.innerHTML = `Seu IMC é ${calcImc.toFixed(2)}, você está com o peso ideal.`
    }else if(calcImc >= 25.0 && calcImc <= 29.9) {
        resultado.innerHTML = `Seu IMC é ${calcImc.toFixed(2)}, você está com sobrepeso.`
    }else if(calcImc >= 30.0 && calcImc <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${calcImc.toFixed(2)}, você está com Obesidade NIVEL 2.`
    }else if(calcImc > 40) {
        resultado.innerHTML = `Seu IMC é ${calcImc.toFixed(2)}, você está com Obesidade NIVEL 3.`
    }

    peso.value = '';
    altura.value = '';
}

btnCalcular.onclick = mostrarResultado