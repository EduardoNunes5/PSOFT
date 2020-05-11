
export async function getJson(){
    var response = await fetch("https://raw.githubusercontent.com/EduardoNunes5/PSOFT/master/Joke/piadas.json")
    let jokes = await response.json()
    jokes = jokes.piadas;
    return jokes;
}

export function getJoke(jsonJokes){
    var index = Math.trunc(Math.random()* jsonJokes.length);
    var currentJoke = jsonJokes[index];
    return currentJoke;
}
