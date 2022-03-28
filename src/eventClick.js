// функция для клика
let check = 0;
function eventClick() {
    let elementId = document.getElementById(this.id);
    
    if (check == 0) startSetBox(elementId);
    
    for (let i = 0; i < matrixId.length; i++) {

        for (let j = 0; j < matrixId[i].length; j++) {

            if (elementId.id == matrixId[i][j]) {
                checkEmptyBox(i, j);
            }
            
        }

    }
    win();
    console.log(matrixTable);
    if (check == 0) bombCount.innerHTML = amountBoombCell;
    check++;
}

function win() {

    if (totalCell - amountOpenCell == amountBoombCell) {
        buttoncount = 1;
        console.log('win!!!');
        //вывод бомб
        for (let i = 0; i < matrixId.length; i++) {

            for (let j = 0; j < matrixId[i].length; j++) {

                if (matrixNumber[i][j] == 'b') {

                    claster = document.getElementById(`line${i}:${j}`);
                    claster.innerHTML = `*`;
                    matrixNumber[i][j] = '&';
                }
            }
        }
    }

}

function checkEmptyBox(i, j) {

    if (matrixNumber[i][j] == 'b') {
        buttoncount = 1;
        for (let i = 0; i < matrixId.length; i++) {
            
            for (let j = 0; j < matrixId[i].length; j++) {
                
                if (matrixNumber[i][j] == 'b') {
                    
                    claster = document.getElementById(`line${i}:${j}`);
                    claster.innerHTML = `*`;
                    matrixNumber[i][j] = '&';
                    matrixTable[i][j].banSet = false;
                }
            }
        }
    }
    
    if (matrixNumber[i][j] == 0) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `0`;
        matrixNumber[i][j] = '*';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 1) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `1`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 2) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `2`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 3) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `3`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 4) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `4`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }

    if (matrixNumber[i][j] == 5) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `5`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }

    if (matrixNumber[i][j] == 6) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `6`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    if (matrixNumber[i][j] !== '|') around(i, j);
}

function around(i, j) {
    
    if (i-1 !== -1) {//вверх
        if (matrixNumber[i - 1][j] == 0) checkEmptyBox( (i - 1), j );
        else if (matrixNumber[i][j] == '*')  setNumberAround(i-1, j);
    }
    
    if (j+1 !== (matrixNumber[i].length) && i-1 !== -1) {
        if (matrixNumber[i - 1][1 + j] == 0) checkEmptyBox( (i - 1), (1 + j) );
        else if (matrixNumber[i][j] == '*')  setNumberAround(i-1, j+1);
    }
    
    if (j+1 !== (matrixNumber[i].length)) {//право
        if (matrixNumber[i][1 + j] == 0) checkEmptyBox(i, ( 1 + j) );
        else if (matrixNumber[i][j] == '*')  setNumberAround(i, j+1);
    }
    
    if (j+1 !== (matrixNumber[i].length) && i+1 !== (matrixNumber.length) ) {
        if (matrixNumber[1 + i][1 + j] == 0) checkEmptyBox( (1 + i), ( 1 + j) );
        else if (matrixNumber[i][j] == '*')  setNumberAround(i+1, j+1);
    }
    
    if (i+1 !== (matrixNumber.length)) {//низ
        if (matrixNumber[1 + i][j] == 0) checkEmptyBox( (1 + i), j);
        else if (matrixNumber[i][j] == '*')  setNumberAround(i+1, j);
    }
    
    if (j-1 !== -1 && i+1 !== (matrixNumber.length) ) {
        if (matrixNumber[1 + i][j - 1] == 0) checkEmptyBox( (1 + i), (j - 1) );
        else if (matrixNumber[i][j] == '*')  setNumberAround(i+1, j-1);
    }
    
    if (j-1 !== -1) {//лево
        if (matrixNumber[i][j - 1] == 0) checkEmptyBox( i, (j - 1) );
        else if (matrixNumber[i][j] == '*')  setNumberAround(i, j-1);
    }
    
    if (j-1 !== -1 && i-1 !== -1) {
        if (matrixNumber[i - 1][j - 1] == 0) checkEmptyBox( (i - 1), (j - 1) );
        else if (matrixNumber[i][j] == '*') setNumberAround(i-1, j-1);
    }

}

function setNumberAround(i, j) {

    if (matrixNumber[i][j] == 1) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `1`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 2) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `2`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 3) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `3`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }
    
    if (matrixNumber[i][j] == 4) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `4`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }

    if (matrixNumber[i][j] == 5) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `5`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }

    if (matrixNumber[i][j] == 6) {
        claster = document.getElementById(`line${i}:${j}`);
        claster.innerHTML = `6`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        matrixTable[i][j].banSet = false;
    }

}











function eventClickRight() {

    let elementId = document.getElementById(this.id);

    for (let i = 0; i < matrixId.length; i++) {

        for (let j = 0; j < matrixId[i].length; j++) {

            if (elementId.id == matrixId[i][j]) {
                flag(i, j, elementId);
            }
            
        }

    }
    return false;
}

let bombCount = document.getElementById('bombCount');
function flag(i, j, elementId) {

    if (matrixTable[i][j].banSet == true) {
        if (matrixNumber[i][j] == '|') {

            if (elementId.value == 'b') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = 'b';
            }

            if (elementId.value == '0') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '0';
            }

            if (elementId.value == '1') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '1';
            }

            if (elementId.value == '2') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '2';
            }

            if (elementId.value == '3') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '3';
            }

            if (elementId.value == '4') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '4';
            }

            if (elementId.value == '5') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '5';
            }

            if (elementId.value == '6') {
                elementId.innerHTML = ``;
                matrixNumber[i][j] = '6';
            }
            bombValue++;
            bombCount.innerHTML = bombValue;
        } else {
            elementId.innerHTML = `🚩`;
            matrixNumber[i][j] = '|';
            bombValue--;
            bombCount.innerHTML = bombValue;
        }
    }
}