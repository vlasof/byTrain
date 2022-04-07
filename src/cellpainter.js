function axon(module) {
    let text = module.innerHTML;
    if (text >= 0) {
        module.style.cssText += `background-color: #4b0082; box-shadow: inset 0px 0px 5px`;
        if (text != 0 && text != `b`) {
            module.style.cssText += `color: #ffa200;`;
        }
    }
}

setInterval(function(){
    for (let i = 0; i < colomn; i++) {
        for (let j = 0; j < colomn; j++) {
            let cell = document.getElementById(`line${i}${j}`);
            axon(cell);
        }
    }
}, 0)
