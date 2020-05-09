function render(template, element){
    if(!element) return;
    if(typeof template === 'function'){
        node.innerHTML = template();
    }
    else{
        node.innerHTML = template;
    }
}



export render;
