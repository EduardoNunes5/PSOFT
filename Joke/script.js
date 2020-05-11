import { render, clear} from './renderizador.js'
import { getJson, getJoke } from './jsonHandler.js'

let $switchJoke = document.querySelector('#jokeButton'),
    $joke = document.querySelector('#joke'),
    $showAnswer = document.querySelector('#jokeAnswerButton'),
    $answer = document.querySelector('#jokeAnswer'),
    jokes = getJson(),
    currentJoke;

(function startApp(){
    jokes.then(piadas => {

        currentJoke = getJoke(piadas);
        render(currentJoke.piada, $joke);

        $switchJoke.addEventListener('click', () => {
            currentJoke = getJoke(piadas);
            render(currentJoke.piada, $joke);
            if($answer !== "")
                clear($answer);
        });

        $showAnswer.addEventListener('click', () => {
            render(currentJoke.resposta, $answer)

        })
    })

}())
