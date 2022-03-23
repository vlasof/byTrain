//определение: бомба или пусто
function selection() {
    let randomNumber;
    
    for (let i = 0; i < idLine.childNodes.length; i++) {
        
        matrixLineId.push(idLine.childNodes[i].id);
        randomNumber = random();
        if (randomNumber < 5) haveBoomb(i);
        else notBoomb(i);
    
    }

    matrixId.push(matrixLineId);
    matrixNumber.push(randomNumberLine);
    randomNumberLine = [];
    matrixLineId = [];
    
    function random() {
        let randomNumber = Math.random() * 99;
        return randomNumber = Math.round(randomNumber);
    }
}

//есть бомба
function haveBoomb(i) {

    idLine.childNodes[i].boomb = 'boomb';
    amountBoombCell++;
    return randomNumberLine.push('b');

}

//нету бомбы
function notBoomb(i) {

    idLine.childNodes[i].boomb = 'empty';
    randomNumberLine.push('e');

}

//изменение последних цифр id
function changeId(id) {
    changeIdcheck++;

    if (id.length == 9) {
        return id = id.slice(0, -1) + changeIdcheck;
    }

    if (id.length == 10) {
        return id = id.slice(0, -2) + changeIdcheck;
    }

    if (id.length == 11) {
        return id = id.slice(0, -3) + changeIdcheck;
    }

    if (id.length == 12) {
        return id = id.slice(0, -4) + changeIdcheck;
    }
}
