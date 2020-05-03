function convert(){

    let $celsius = document.querySelector('#celsius').value;
    let fahrenheit = toFahrenheit($celsius)
    let kelvin = toKelvin($celsius)
    let temperatures = document.querySelectorAll('span');
    temperatures[1].innerText = fahrenheit || 'Valor inválido';
    temperatures[2].innerText = kelvin || 'Valor inválido';
}

function toFahrenheit($celsius){

    return Number($celsius) * 1.8 + 32
}

function toKelvin($celsius){
    
    return Number($celsius) + 273.15
}

