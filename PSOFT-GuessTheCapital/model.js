

async function getStates(){
	var response = await fetch("https://raw.githubusercontent.com/EduardoNunes5/PSOFT/master/PSOFT-GuessTheCapital/estados.json")
    var json = await response.json();
    return generateQuestionObject(json.estados);   
}


function generateQuestionObject(states){
	var index = Math.trunc(Math.random() * states.length());
	return [index, states.estados];
}


function checkAnswer(stateObject, $input){
	if($input.value.toLowerCase() === stateObject[1].capital.toLowerCase()){
		$result.innerText= "Resposta correta!";
		clearIO();
		$score.textContent = Number($score.textContent)+1;
		stateObject[1].estados.splice(stateObject[0], 1);
		if(stateObject[1].estados.length){
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
	console.log("eiiitia")
	return 0;
}



export { getStates }