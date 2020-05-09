export function render(template, element){
    if(!element) return;
    if(typeof template === 'function'){
        element.innerHTML = template();
    }
    else{
        element.innerHTML = template;
    }
}


export function clear(element){
    if(!element) return;
    else{
        element.innerHTML = "";
    }
}
