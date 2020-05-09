function getPiadas(){
    return fetch("https://raw.githubusercontent.com/EduardoNunes5/PSOFT/master/Joke/piadas.json")
        .then(response => response.json())
        .then(json => json.piadas)
}


export async function getPiadaAleatoria(){
    var piadas = await getPiadas();
    var index = Math.trunc(Math.random() * piadas.length);
    return [piadas[index].piada, piada[index].resposta];


}
