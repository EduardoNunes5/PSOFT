import { getStates } from './model.js';
import { render } from './template.js'; 


$state = document.querySelector("#state");

estados = getStates();

render($state, estados[1].estados[0].estados)