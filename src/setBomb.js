function startSetBox(elementId) {
    for (let i = 0; i < colomn; i++) {
        idLine = document.getElementById(id);
        selection(elementId);
    id = changeId(id, i);
    }

    matrixNumberBoxDraw();
}

//определение: бомба или пусто
function selection(elementId) {
    let randomNumber;
    let matrixLineId = [];
    let matrixTableId = [];

    for (let i = 0; i < idLine.childNodes.length; i++) {
        
        if (elementId.id == idLine.childNodes[i].id) {//первое нажатие не бомба
            matrixLineId.push(idLine.childNodes[i].id);
            notBoomb(i);

        } else {
            matrixLineId.push(idLine.childNodes[i].id);
            randomNumber = random();
            if (randomNumber < 10) haveBoomb(i);
            else notBoomb(i);
        }
        idLine.childNodes[i].banSet = true;
        matrixTableId.push(idLine.childNodes[i]);
    }

    bombValue = amountBoombCell;


    matrixId.push(matrixLineId);
    matrixTable.push(matrixTableId);
    matrixNumber.push(randomNumberLine);
    randomNumberLine = [];
    matrixLineId = [];
    matrixTableId = [];
    
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
}
