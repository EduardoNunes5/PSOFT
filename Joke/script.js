import { render, clear} from '/renderizador.js'
import { getPiadaAleatoria } from '/piadas.js'

let $button = document.querySelector('#jokeButton'),
    $joke = document.querySelector('#joke'),
    $answerButton = document.querySelector('#jokeAnswerButton'),
    $answer = document.querySelector('#jokeAnswer');


let joke;
let jokeText;
let jokeAnswer;
let firstJoke = true;
$button.addEventListener('click', function (){
    getPiadaAleatoria().then(piada => {
        jokeText = piada[0];
        jokeAnswer = piada[1];
        if(!firstJoke){
            clear($answer);
        }
        firstJoke = false;
        render(jokeText, $joke);

    } )

});

$answerButton.addEventListener('click', function (){
    render(jokeAnswer, $answer);
})
