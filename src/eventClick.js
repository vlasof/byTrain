// функция для клика
let check = 0;
function eventClick() {

    let elementId = document.getElementById( this.id);

    for (let i = 0; i < matrixId.length; i++) {

        for (let j = 0; j < matrixId[i].length; j++) {

            if (elementId.id == matrixId[i][j]) {
                checkEmptyBox(i, j);
            }
            
        }

    }

    console.log('----------------------')
    console.log(amountOpenCell);
    console.log('----------------------')
    //рисовка в косоле (можно удалить)
    for (let h = 0; h < matrixNumber.length; h++) {
        console.log(...matrixNumber[h]);
    }

    win();

}

// let totalCell = 0;//всего клеток
// let amountBoombCell = 0;//количество бомб
// let amountOpenCell = 0;//количество открытых клеток
function win() {

    if (totalCell - amountOpenCell == amountBoombCell) {

        console.log('win!!!');

    }

}

function checkEmptyBox(i, j) {

    if (matrixNumber[i][j] == 'b') {
        for (let i = 0; i < matrixId.length; i++) {

            for (let j = 0; j < matrixId[i].length; j++) {

                if (matrixNumber[i][j] == 'b') {

                    claster = document.getElementById(`line${i}${j}`);
                    claster.innerHTML = `b`;
                    matrixNumber[i][j] = '&';
                }
            }
        }
    }
    
    if (matrixNumber[i][j] == 0) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `0`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
        // checkZero(i, j);
        check++;
    }
    
    if (matrixNumber[i][j] == 1) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `1`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }
    
    if (matrixNumber[i][j] == 2) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `2`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }
    
    if (matrixNumber[i][j] == 3) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `3`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }
    
    if (matrixNumber[i][j] == 4) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `4`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }

    if (matrixNumber[i][j] == 5) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `5`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }

    if (matrixNumber[i][j] == 6) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `6`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }

    around(i, j);
}

function around(i, j) {
    
    if (i-1 !== -1) {//вверх
        if (matrixNumber[i - 1][j] == 0) checkEmptyBox( (i - 1), j );
        else setNumberAround(i-1, j);
    }
    
    if (j+1 !== (matrixNumber[i].length) && i-1 !== -1) {
        if (matrixNumber[i - 1][1 + j] == 0) checkEmptyBox( (i - 1), (1 + j) );
        else setNumberAround(i-1, j+1);
    }
    
    if (j+1 !== (matrixNumber[i].length)) {//право
        if (matrixNumber[i][1 + j] == 0) checkEmptyBox(i, ( 1 + j) );
        else setNumberAround(i, j+1);
    }
    
    if (j+1 !== (matrixNumber[i].length) && i+1 !== (matrixNumber.length) ) {
        if (matrixNumber[1 + i][1 + j] == 0) checkEmptyBox( (1 + i), ( 1 + j) );
        else setNumberAround(i+1, j+1);
    }
    
    if (i+1 !== (matrixNumber.length)) {//низ
        if (matrixNumber[1 + i][j] == 0) checkEmptyBox( (1 + i), j);
        else setNumberAround(i+1, j);
    }
    
    if (j-1 !== -1 && i+1 !== (matrixNumber.length) ) {
        if (matrixNumber[1 + i][j - 1] == 0) checkEmptyBox( (1 + i), (j - 1) );
        else setNumberAround(i+1, j-1);
    }
    
    if (j-1 !== -1) {//лево
        if (matrixNumber[i][j - 1] == 0) checkEmptyBox( i, (j - 1) );
        else setNumberAround(i, j-1);
    }
    
    if (j-1 !== -1 && i-1 !== -1) {
        if (matrixNumber[i - 1][j - 1] == 0) checkEmptyBox( (i - 1), (j - 1) );
        else setNumberAround(i-1, j-1);
    }

}

function setNumberAround(i, j) {

    if (matrixNumber[i][j] == 1) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `1`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }
    
    if (matrixNumber[i][j] == 2) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `2`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }
    
    if (matrixNumber[i][j] == 3) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `3`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }
    
    if (matrixNumber[i][j] == 4) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `4`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }

    if (matrixNumber[i][j] == 5) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `5`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }

    if (matrixNumber[i][j] == 6) {
        claster = document.getElementById(`line${i}${j}`);
        claster.innerHTML = `6`;
        matrixNumber[i][j] = '&';
        amountOpenCell++;
    }

}
