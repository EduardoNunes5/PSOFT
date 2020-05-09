export function getPiadaAleatoria(){
    return fetch("https://raw.githubusercontent.com/EduardoNunes5/PSOFT/master/Joke/piadas.json")
        .then(response => response.json())
        .then(json => getPiada(json.piadas))
}


function getPiada(piadas){
    var index = Math.trunc(Math.random() * piadas.length);
    return [piadas[index].piada, piadas[index].resposta];

}
