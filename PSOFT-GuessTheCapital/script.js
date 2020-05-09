let states,
	$input = document.querySelector('#answer'),
	$result = document.querySelector('#result'),
	$score = document.querySelector('#score');


function startGame(){fetch("https://eduardonunes5.github.io/PSOFT-GuessTheCapital/file.json")
	.then(resolve => resolve.json())
	.then(statesJson => {
		states = statesJson;
		updateQuestion();
		
	})
}



let currentState;
function updateQuestion(){
	currentState = getRandomState();	
	document.querySelector('#state').innerText = currentState[1].nome;
};


function getRandomState(){
	var randIndex = Math.trunc((Math.random() * states.estados.length));
	return [randIndex,states.estados[randIndex]];
	
}


function checkAnswer(){

	if(currentState[1].capital.toLowerCase() === $input.value.toLowerCase() ){
		$result.innerText= "Resposta correta!";
		clearIO();
		$score.textContent = Number($score.textContent)+1;
		states.estados.splice(currentState[0], 1);
		if(states.estados.length){
			updateQuestion();
		}
		else{
			$result.innerText= "Você venceu! jogo encerrado. Jogo recomeçando em 2 segundos";
			setTimeout(startGame,2000);
			clearIO();
		}

	}
	else{
		$result.innerText = "Respota incorreta!";
		clearIO();
	}
}


function clearIO(){
	$input.value = "";
	setTimeout(function(){
			$result.innerText = "";

		},1500);
}


startGame();